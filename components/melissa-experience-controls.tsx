"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const LAST_WORK_KEY = "giuspe:last-opened-work";
const JOURNEY_STATE_KEY = "giuspe:journey-state";
const MELISSA_VIDEO_OPENED_KEY = "giuspe:melissa-video-opened";
const MELISSA_WORK_ID = "work-melissa";
const MELISSA_SLUG = "melissa";
const MELISSA_TITLE = "Melissa";

type WindowWithDataLayer = Window &
  typeof globalThis & {
    dataLayer?: Record<string, unknown>[];
  };

type MelissaJourneyWork = {
  workId: string;
  enteredAt: string;
  notesReached: boolean;
  rewatchClicked: boolean;
  completedAt?: string;
  lastVisitedAt: string;
};

type JourneyState = {
  works: Record<string, MelissaJourneyWork>;
};

type StreamingLink = {
  label: string;
  href: string;
  platform: string;
};

function getLocalStorageItem(key: string) {
  try {
    return window.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function setLocalStorageItem(key: string, value: string) {
  try {
    window.localStorage?.setItem(key, value);
  } catch {
    // Browser storage can be unavailable in privacy modes. The page still works.
  }
}

function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const target = window as WindowWithDataLayer;
    target.dataLayer = target.dataLayer ?? [];
    target.dataLayer.push({
      event,
      work_slug: MELISSA_SLUG,
      ...payload,
    });
  } catch {
    // Analytics must never block the page experience.
  }
}

function readJourneyState(): JourneyState {
  try {
    const raw = getLocalStorageItem(JOURNEY_STATE_KEY);
    const parsed = raw ? (JSON.parse(raw) as JourneyState) : null;

    if (parsed?.works && typeof parsed.works === "object") {
      return parsed;
    }
  } catch {
    // Ignore malformed local state and rebuild it from the current visit.
  }

  return { works: {} };
}

function writeLastOpenedWork(now: string) {
  setLocalStorageItem(
    LAST_WORK_KEY,
    JSON.stringify({
      slug: MELISSA_SLUG,
      title: MELISSA_TITLE,
      visitedAt: now,
    }),
  );
  window.dispatchEvent(new Event("giuspe-journey-updated"));
}

function updateMelissaJourney(
  update: (current: MelissaJourneyWork, now: string) => MelissaJourneyWork,
) {
  if (typeof window === "undefined") {
    return;
  }

  const now = new Date().toISOString();
  const state = readJourneyState();
  const current =
    state.works[MELISSA_SLUG] ??
    ({
      workId: MELISSA_WORK_ID,
      enteredAt: now,
      notesReached: false,
      rewatchClicked: false,
      lastVisitedAt: now,
    } satisfies MelissaJourneyWork);

  state.works[MELISSA_SLUG] = update(current, now);
  setLocalStorageItem(JOURNEY_STATE_KEY, JSON.stringify(state));
  writeLastOpenedWork(now);
}

export function MelissaJourneyTracker({
  notesStartId,
  notesEndId,
  completionId,
}: {
  notesStartId: string;
  notesEndId: string;
  completionId: string;
}) {
  const notesStartedRef = useRef(false);
  const notesEndedRef = useRef(false);
  const completedRef = useRef(false);

  useEffect(() => {
    const existing = readJourneyState().works[MELISSA_SLUG];

    updateMelissaJourney((current, now) => ({
      ...current,
      lastVisitedAt: now,
    }));

    if (!existing?.enteredAt) {
      track("journey_started");
    }

    track("work_entered");
  }, []);

  useEffect(() => {
    const notesStart = document.getElementById(notesStartId);
    const notesEnd = document.getElementById(notesEndId);
    const completion = document.getElementById(completionId);

    if (!notesStart || !notesEnd || !completion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          if (entry.target === notesStart && !notesStartedRef.current) {
            notesStartedRef.current = true;
            track("notes_started");
            updateMelissaJourney((current, now) => ({
              ...current,
              notesReached: true,
              lastVisitedAt: now,
            }));
          }

          if (entry.target === notesEnd && !notesEndedRef.current) {
            notesEndedRef.current = true;
            track("notes_reached_end");
            updateMelissaJourney((current, now) => ({
              ...current,
              notesReached: true,
              lastVisitedAt: now,
            }));
          }

          if (entry.target === completion && !completedRef.current) {
            completedRef.current = true;
            track("work_completed");
            updateMelissaJourney((current, now) => ({
              ...current,
              completedAt: current.completedAt ?? now,
              lastVisitedAt: now,
            }));
          }
        });
      },
      {
        threshold: 0.34,
      },
    );

    observer.observe(notesStart);
    observer.observe(notesEnd);
    observer.observe(completion);

    return () => observer.disconnect();
  }, [completionId, notesEndId, notesStartId]);

  return null;
}

export function MelissaReleaseCopy({
  forceReleased = false,
  releaseDateTime,
  releaseLabel,
}: {
  forceReleased?: boolean;
  releaseDateTime: string;
  releaseLabel: string;
}) {
  const [isReleased, setIsReleased] = useState(false);
  const [hasOpenedVideo, setHasOpenedVideo] = useState(false);
  const effectiveIsReleased = forceReleased || isReleased;

  useEffect(() => {
    if (forceReleased) {
      return;
    }

    const releaseTime = new Date(releaseDateTime).getTime();
    const updateReleaseState = () => setIsReleased(Date.now() >= releaseTime);

    updateReleaseState();

    const delay = releaseTime - Date.now();
    const timeoutId =
      delay > 0
        ? window.setTimeout(updateReleaseState, Math.min(delay, 2_147_483_647))
        : undefined;

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [forceReleased, releaseDateTime]);

  useEffect(() => {
    const updateVideoState = () =>
      setHasOpenedVideo(
        getLocalStorageItem(MELISSA_VIDEO_OPENED_KEY) === "true",
      );

    updateVideoState();
    window.addEventListener("storage", updateVideoState);
    window.addEventListener("giuspe-melissa-video-opened", updateVideoState);

    return () => {
      window.removeEventListener("storage", updateVideoState);
      window.removeEventListener("giuspe-melissa-video-opened", updateVideoState);
    };
  }, []);

  if (!effectiveIsReleased) {
    return (
      <div className="melissa-release-copy">
        <h1>Melissa</h1>
        <strong>Il video si apre il {releaseLabel}.</strong>
        <p>Quando sarà il momento, guardala.</p>
        <p>Poi entra.</p>
        <p>Non per cercare una spiegazione.</p>
        <p>Per guardare ancora una volta, più da vicino.</p>
      </div>
    );
  }

  if (!hasOpenedVideo) {
    return (
      <div className="melissa-release-copy">
        <h1>Melissa</h1>
        <strong>Il video è qui.</strong>
        <p>Prima guardala.</p>
        <p>Poi entra.</p>
        <p>Non per cercare una spiegazione.</p>
        <p>Per guardare ancora una volta, più da vicino.</p>
      </div>
    );
  }

  return (
    <div className="melissa-release-copy">
      <h1>Melissa</h1>
      <strong>Hai visto il video.</strong>
      <p>Adesso entra.</p>
      <p>Non per cercare una spiegazione.</p>
      <p>Per guardare ancora una volta, più da vicino.</p>
    </div>
  );
}

export function MelissaVideoGate({
  videoId,
  videoUrl,
  title,
  posterImage,
}: {
  videoId: string;
  videoUrl: string;
  title: string;
  posterImage: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameKey, setFrameKey] = useState(0);
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  const openVideo = useCallback(() => {
    setIsLoaded(true);
    setLocalStorageItem(MELISSA_VIDEO_OPENED_KEY, "true");
    track("video_started");
    window.dispatchEvent(new Event("giuspe-melissa-video-opened"));
    window.dispatchEvent(new Event("giuspe-video-started"));
  }, []);

  useEffect(() => {
    const handleRewatch = () => {
      setIsLoaded(true);
      setFrameKey((current) => current + 1);
    };

    window.addEventListener("giuspe-melissa-rewatch", handleRewatch);
    return () =>
      window.removeEventListener("giuspe-melissa-rewatch", handleRewatch);
  }, []);

  return (
    <div className="melissa-video-frame">
      {!isLoaded ? (
        <button
          aria-label="Carica il video ufficiale Melissa"
          className="melissa-video-poster"
          onClick={openVideo}
          style={
            {
              "--melissa-poster": `url(${posterImage})`,
            } as CSSProperties
          }
          type="button"
        >
          <span className="melissa-play-mark" aria-hidden="true" />
          <span>Guarda Melissa</span>
          <small>Nessun autoplay. Il player si carica solo quando lo apri.</small>
        </button>
      ) : (
        <iframe
          key={frameKey}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={iframeSrc}
          title={title}
        />
      )}
      <a className="melissa-youtube-link" href={videoUrl}>
        Apri su YouTube
      </a>
    </div>
  );
}

export function MelissaRewatchButton() {
  const handleClick = () => {
    track("rewatch_clicked");
    updateMelissaJourney((current, now) => ({
      ...current,
      rewatchClicked: true,
      lastVisitedAt: now,
    }));
    window.dispatchEvent(new Event("giuspe-melissa-rewatch"));
    document.getElementById("melissa-video")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button className="secondary-button melissa-rewatch-button" onClick={handleClick} type="button">
      Riguarda Melissa
    </button>
  );
}

export function MelissaStreamingLink({ link }: { link: StreamingLink }) {
  return (
    <a
      className="melissa-streaming-link"
      href={link.href}
      onClick={() =>
        track("streaming_clicked", {
          platform: link.platform,
        })
      }
    >
      {link.label}
    </a>
  );
}
