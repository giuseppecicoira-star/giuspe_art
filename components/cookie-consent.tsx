"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "giuspe:cookie-consent:v1";
const GTM_ID = "GTM-K7S4P7DH";

type ConsentChoice = "accepted" | "rejected";
type ConsentState = ConsentChoice | "loading" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(choice: ConsentChoice) {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtagShim(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "update", {
    ad_personalization: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    analytics_storage: choice === "accepted" ? "granted" : "denied",
  });
}

function loadGoogleTagManager() {
  if (document.getElementById("google-tag-manager-loader")) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.id = "google-tag-manager-loader";
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentState>("loading");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const stored = window.localStorage.getItem(CONSENT_KEY) as
        | ConsentChoice
        | null;
      setChoice(stored);

      if (stored === "accepted") {
        updateConsent("accepted");
        loadGoogleTagManager();
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function choose(nextChoice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    updateConsent(nextChoice);

    if (nextChoice === "accepted") {
      loadGoogleTagManager();
    }
  }

  if (choice) {
    return null;
  }

  return (
    <section
      aria-label="Consenso cookie"
      className="cookie-consent"
      role="dialog"
    >
      <div>
        <strong>Cookie e ascolto del sito</strong>
        <p>
          Usiamo cookie tecnici e, solo se accetti, strumenti di analytics per
          capire come viene attraversato il sito. Puoi continuare senza
          analytics.
        </p>
      </div>
      <div className="cookie-actions">
        <a href="/cookie-policy">Dettagli</a>
        <button className="secondary-button" onClick={() => choose("rejected")} type="button">
          Rifiuta
        </button>
        <button onClick={() => choose("accepted")} type="button">
          Accetta
        </button>
      </div>
    </section>
  );
}
