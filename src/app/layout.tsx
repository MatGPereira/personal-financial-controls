import './global.css';

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Moon } from 'lucide-react';
import { Toaster } from 'sonner';

import NavLinks from './_components/NavLinks';

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Controle Financeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} antialiased max-w-screen min-h-screen flex flex-col`}
      >
        <header className="flex flex-col">
          <div className="flex items-center justify-between p-4">
            <div>
              <h1 className="text-2xl font-bold mb-1 text-zinc-800">
                Controle Financeiro
              </h1>
              <p className="text-zinc-600">Sua vida financeira sob controle</p>
            </div>
            <button
              className={`bg-zinc-100 p-2 rounded-lg cursor-pointer
                hover:bg-zinc-200 text-zinc-600
              `}
              type="button"
            >
              <Moon aria-hidden={true} />
            </button>
          </div>
          <NavLinks />
        </header>
        <main className="p-4 bg-zinc-100 flex-1">
          {children}
        </main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
