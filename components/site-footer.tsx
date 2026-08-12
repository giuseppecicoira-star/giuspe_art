import { contactEmail, musicLinks, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="/">
        Giuspe
      </a>
      <p>Musica per attraversare le crepe della realtà.</p>
      <nav aria-label="Link esterni e informazioni">
        <a href={musicLinks.spotify}>Spotify</a>
        <a href={musicLinks.appleMusic}>Apple Music</a>
        <a href={musicLinks.amazonMusic}>Amazon Music</a>
        <a href={musicLinks.tidal}>TIDAL</a>
        <a href={socialLinks.youtube}>YouTube</a>
        <a href={socialLinks.instagram}>Instagram</a>
        <a href={socialLinks.tiktok}>TikTok</a>
        <a href={socialLinks.facebook}>Facebook</a>
        <a href={socialLinks.threads}>Threads</a>
        <a href={`mailto:${contactEmail}`}>Contatti</a>
        <a href="/privacy">Privacy</a>
        <a href="/cookie-policy">Cookie</a>
      </nav>
    </footer>
  );
}
