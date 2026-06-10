"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "giuspe:last-opened-work";

type StoredWork = {
  slug: string;
  title: string;
  visitedAt: string;
};

export function JourneyMemory({
  firstSlug,
  firstTitle,
  latestSlug,
  latestTitle,
}: {
  firstSlug: string;
  firstTitle: string;
  latestSlug: string;
  latestTitle: string;
}) {
  const storedValue = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener("giuspe-journey-updated", onStoreChange);
      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener("giuspe-journey-updated", onStoreChange);
      };
    },
    () => window.localStorage.getItem(STORAGE_KEY),
    () => null,
  );

  const lastWork = useMemo(() => {
    if (!storedValue) {
      return null;
    }

    try {
      const parsed = JSON.parse(storedValue) as StoredWork;
      return parsed.slug && parsed.title ? parsed : null;
    } catch {
      return null;
    }
  }, [storedValue]);

  if (!lastWork) {
    return (
      <div className="journey-actions" aria-label="Ingresso al percorso">
        <a className="primary-button" href={`/opere/${firstSlug}`}>
          Entra
        </a>
        <a className="secondary-button" href={`/opere/${latestSlug}`}>
          Prima porta: {firstTitle}. Porta più recente: {latestTitle}
        </a>
      </div>
    );
  }

  return (
    <div className="return-panel" aria-live="polite">
      <p>Sei già passato da qui.</p>
      <div className="journey-actions" aria-label="Memoria del viaggio">
        <a className="primary-button" href={`/opere/${lastWork.slug}`}>
          Riprendi da {lastWork.title}
        </a>
        <a className="secondary-button" href={`/opere/${latestSlug}`}>
          Raggiungi la porta più recente: {latestTitle}
        </a>
      </div>
    </div>
  );
}

export function MarkWorkVisited({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        slug,
        title,
        visitedAt: new Date().toISOString(),
      }),
    );
    window.dispatchEvent(new Event("giuspe-journey-updated"));
  }, [slug, title]);

  return null;
}
