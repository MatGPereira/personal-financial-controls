import './global.css';

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Moon } from 'lucide-react';
import { Toaster } from 'sonner';

import NavLinks from './_components/NavLinks';
import { cookies } from 'next/headers';
import { decrypt } from './login/_lib/sessions';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/ui/theme-toggle';

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isAuthenticated
            ? (
              <header className="flex flex-col dark:bg-gray-800">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-1 text-zinc-800 dark:text-gray-100">
                      Controle Financeiro
                    </h1>
                    <p className="text-zinc-600 dark:text-gray-400">
                      Sua vida financeira sob controle
                    </p>
                  </div>
                  <ThemeToggle />
                </div>
                <NavLinks />
              </header>
            )
            : null
          }
          <main className={`p-4 bg-zinc-100 flex-1 ${!isAuthenticated && 'grid place-items-center'}
            dark:bg-gray-900
          `}>
            {children}
          </main>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
