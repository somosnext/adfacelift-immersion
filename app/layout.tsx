import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Congresso AdFaceLift Immersion — Lipoenxertia",
  description: "Congresso AdFaceLift Immersion — Lipoenxertia — 21 de outubro.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
