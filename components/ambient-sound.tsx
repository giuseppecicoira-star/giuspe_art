"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { AmbientSoundProfile } from "@/content/works";

type AmbientSoundControlProps = {
  ambientSound: {
    profile: AmbientSoundProfile;
    label: string;
    description: string;
    layers: string[];
  };
  ambientVolume: number;
  loop: boolean;
};

type AmbientEngine = {
  context: AudioContext;
  masterGain: GainNode;
  sources: AudioScheduledSourceNode[];
};

type WindowWithWebkitAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

function createNoiseSource(
  context: AudioContext,
  loop: boolean,
  seconds = 2,
) {
  const buffer = context.createBuffer(
    1,
    Math.max(1, Math.floor(context.sampleRate * seconds)),
    context.sampleRate,
  );
  const channel = buffer.getChannelData(0);

  for (let index = 0; index < channel.length; index += 1) {
    channel[index] = Math.random() * 2 - 1;
  }

  const source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = loop;
  return source;
}

function addNoiseLayer(
  context: AudioContext,
  masterGain: GainNode,
  loop: boolean,
  frequency: number,
  gainValue: number,
  type: BiquadFilterType,
) {
  const source = createNoiseSource(context, loop);
  const filter = context.createBiquadFilter();
  const layerGain = context.createGain();

  filter.type = type;
  filter.frequency.value = frequency;
  filter.Q.value = type === "bandpass" ? 0.7 : 0.35;
  layerGain.gain.value = gainValue;

  source.connect(filter);
  filter.connect(layerGain);
  layerGain.connect(masterGain);
  source.start();

  return source;
}

function addToneLayer(
  context: AudioContext,
  masterGain: GainNode,
  frequency: number,
  gainValue: number,
) {
  const oscillator = context.createOscillator();
  const layerGain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  layerGain.gain.value = gainValue;

  oscillator.connect(layerGain);
  layerGain.connect(masterGain);
  oscillator.start();

  return oscillator;
}

function buildProfile(
  profile: AmbientSoundProfile,
  context: AudioContext,
  masterGain: GainNode,
  loop: boolean,
) {
  switch (profile) {
    case "rain_forest":
      return [
        addNoiseLayer(context, masterGain, loop, 2800, 0.034, "highpass"),
        addNoiseLayer(context, masterGain, loop, 640, 0.012, "bandpass"),
        addToneLayer(context, masterGain, 92, 0.004),
      ];
    case "dry_wind":
      return [
        addNoiseLayer(context, masterGain, loop, 820, 0.024, "bandpass"),
        addNoiseLayer(context, masterGain, loop, 1800, 0.01, "highpass"),
        addToneLayer(context, masterGain, 54, 0.004),
      ];
    case "tense_village":
      return [
        addNoiseLayer(context, masterGain, loop, 520, 0.014, "bandpass"),
        addNoiseLayer(context, masterGain, loop, 2200, 0.008, "highpass"),
        addToneLayer(context, masterGain, 118, 0.003),
      ];
    case "distant_room":
      return [
        addNoiseLayer(context, masterGain, loop, 280, 0.012, "lowpass"),
        addToneLayer(context, masterGain, 68, 0.003),
      ];
    case "open_wind":
      return [
        addNoiseLayer(context, masterGain, loop, 460, 0.018, "bandpass"),
        addNoiseLayer(context, masterGain, loop, 1300, 0.01, "highpass"),
        addToneLayer(context, masterGain, 76, 0.003),
      ];
  }
}

export function AmbientSoundControl({
  ambientSound,
  ambientVolume,
  loop,
}: AmbientSoundControlProps) {
  const engineRef = useRef<AmbientEngine | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("Nessun autoplay.");

  const stopAmbient = useCallback(() => {
    const engine = engineRef.current;

    if (!engine) {
      return;
    }

    const { context, masterGain, sources } = engine;
    const fadeEnd = context.currentTime + 0.18;
    masterGain.gain.cancelScheduledValues(context.currentTime);
    masterGain.gain.setValueAtTime(masterGain.gain.value, context.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.0001, fadeEnd);

    window.setTimeout(() => {
      sources.forEach((source) => {
        try {
          source.stop();
        } catch {
          // Already stopped by the browser audio engine.
        }
      });
      void context.close();
    }, 220);

    engineRef.current = null;
    setIsActive(false);
    setMessage("Ambiente spento.");
  }, []);

  const startAmbient = useCallback(async () => {
    if (engineRef.current) {
      stopAmbient();
      return;
    }

    const AudioContextClass =
      window.AudioContext ??
      (window as WindowWithWebkitAudio).webkitAudioContext;

    if (!AudioContextClass) {
      setMessage("Audio non disponibile in questo browser.");
      return;
    }

    const context = new AudioContextClass();
    await context.resume();

    const masterGain = context.createGain();
    masterGain.gain.value = 0.0001;
    masterGain.connect(context.destination);

    const sources = buildProfile(
      ambientSound.profile,
      context,
      masterGain,
      loop,
    );

    masterGain.gain.linearRampToValueAtTime(
      Math.min(Math.max(ambientVolume, 0), 0.38),
      context.currentTime + 0.24,
    );

    engineRef.current = {
      context,
      masterGain,
      sources,
    };
    setIsActive(true);
    setMessage("Ambiente attivo.");
  }, [ambientSound.profile, ambientVolume, loop, stopAmbient]);

  useEffect(() => stopAmbient, [stopAmbient]);

  return (
    <section className="ambient-sound" aria-label="Ambiente sonoro">
      <div>
        <p className="section-label">Ambiente sonoro</p>
        <h2>{ambientSound.label}</h2>
        <p>{ambientSound.description}</p>
      </div>

      <div className="ambient-panel">
        <button
          aria-pressed={isActive}
          className="ambient-button"
          onClick={isActive ? stopAmbient : startAmbient}
          type="button"
        >
          <span>{isActive ? "Spegni ambiente" : "Attiva ambiente"}</span>
          <small>{message}</small>
        </button>

        <div className="ambient-layers" aria-label="Strati sonori">
          {ambientSound.layers.map((layer) => (
            <span key={layer}>{layer}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
