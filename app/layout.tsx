import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { TestProvider } from "@/context/TestContext";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Teste de Nível Vibracional - Escala de Hawkins",
  description: "Descubra em qual nível de frequência da Escala de Hawkins você está vibrando. Faça o teste agora e transforme sua realidade.",
  openGraph: {
    title: "Descubra seu Nível Vibracional - Escala de Hawkins",
    description: "Faça o teste gratuito e descubra sua frequência de abundância.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <TestProvider>{children}</TestProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
