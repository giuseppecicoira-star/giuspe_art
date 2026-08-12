type AppUpdatesNoticeProps = {
  className?: string;
  ctaLabel?: string;
};

export function AppUpdatesNotice({
  className = "app-updates-notice",
  ctaLabel = "App in arrivo",
}: AppUpdatesNoticeProps) {
  return (
    <article className={className}>
      <p className="section-label">Aggiornamenti</p>
      <h3>Presto il viaggio continuer&agrave; anche nell&apos;app.</h3>
      <p>
        Uscite, appunti dietro i brani, notifiche e contenuti esclusivi saranno
        raccolti nella PWA di Giuspe. Qui non devi lasciare nessun dato: quando
        sar&agrave; pronta, potrai scegliere tu se seguire il percorso
        dall&apos;app.
      </p>
      <span>{ctaLabel}</span>
    </article>
  );
}
