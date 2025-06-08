import './global.css';

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Moon } from 'lucide-react';
import { Toaster } from 'sonner';

import NavLinks from './_components/NavLinks';
import { cookies } from 'next/headers';
import { decrypt } from './login/_lib/sessions';
import clsx from 'clsx';

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Controle Financeiro",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = (await cookies()).get("session")?.value
  const session = await decrypt(cookie)
  const isAuthenticated = !!session?.userId

  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} flex flex-col antialiased max-w-screen min-h-screen`}
      >
        {isAuthenticated
          ? (
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
          )
          : null
        }
        <main className={`p-4 bg-zinc-100 flex-1 ${!isAuthenticated && 'grid place-items-center'}`}>
          {children}
        </main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
