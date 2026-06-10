import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giuspe",
  description:
    "Una esperienza narrativa digitale per attraversare le opere, i frammenti e le visioni di Giuspe.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
