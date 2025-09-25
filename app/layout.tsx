import type { Metadata } from "next";
import { Great_Vibes, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lara Movió - Psicologia Clínica",
  description:
    "Terapia personalizada e acolhimento profissional. Transforme sua vida com Lara Movió, psicóloga especializada em atendimento humanizado.",
  keywords:
    "psicologia, terapia, psicóloga, atendimento psicológico, saúde mental, bem-estar",
  authors: [{ name: "Lara Movió" }],
  openGraph: {
    title: "Lara Movió - Psicologia Clínica",
    description:
      "Terapia personalizada e acolhimento profissional para todas as fases da vida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
