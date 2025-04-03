import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from './ThemeRegistry';
import AuthProviderWrapper from './AuthProviderWrapper';
import NavBarWrapper from './NavBarWrapper';

export const metadata = {
  title: "Chronos - Cronômetro de Estudos",
  description: "Aplicativo para cronometrar tempo de estudo",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeRegistry>
          <AuthProviderWrapper>
            <NavBarWrapper />
            {children}
          </AuthProviderWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
