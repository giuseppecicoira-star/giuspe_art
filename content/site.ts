export const siteUrl = "https://giuspe.it";

export const siteCanonicalUrl = `${siteUrl}/`;

export function absoluteUrl(path: string) {
  return new URL(path, siteCanonicalUrl).toString();
}

export const siteHost = "giuspe.it";

export const siteName = "Giuspe";

export const siteTitle = "Giuspe — Autore e musicista";

export const siteDescription =
  "Giuspe è un autore e musicista italiano. Musica, parole e ambienti visivi diventano punti di osservazione da attraversare.";

export const siteLongDescription =
  "Giuspe è un autore e musicista italiano. Le sue opere uniscono musica, parole e ambienti visivi in un percorso narrativo.";

export const siteOgImage = {
  url: absoluteUrl("/giuspe-studio.png"),
  width: 1737,
  height: 906,
  alt: "Studio sonoro del progetto Giuspe",
};

export const newsletterEmail = "news@giuspe.it";

export const socialLinks = {
  instagram: "https://instagram.com/giuspe_music?igshid=YTQwZjQ0NmI0OA==",
};

export const musicLinks = {
  spotify: "https://open.spotify.com/artist/13FeElBbQJq5g4Z5XsuPZn",
  spotifyShort: "https://spoti.fi/3Rr3a0P",
  appleMusic: "https://music.apple.com/it/artist/giuspe/1717259611",
  appleMusicShort: "https://apple.co/47GaQSz",
  amazonMusic:
    "https://music.amazon.it/artists/B0CNQ161HS/giuspe?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_rR2MG0GAQz2EukkHUVXT6aMbf",
  tidal: "https://listen.tidal.com/artist/43930178",
};

export const officialProfileLinks = [
  socialLinks.instagram,
  musicLinks.spotify,
  musicLinks.appleMusic,
  musicLinks.amazonMusic,
  musicLinks.tidal,
];
