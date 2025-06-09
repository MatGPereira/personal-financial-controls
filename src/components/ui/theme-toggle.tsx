'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className={`bg-zinc-100 dark:bg-gray-700 p-2 rounded-lg cursor-pointer
        hover:bg-zinc-200 dark:hover:bg-gray-600 text-zinc-600 dark:text-gray-300
      `}
      type="button"
      onClick={theme === 'dark'
        ? () => setTheme('light')
        : () => setTheme('dark')}
    >
      {theme === 'dark'
        ? <Sun aria-hidden={true} />
        : <Moon aria-hidden={true} />}
    </button>
  );
}
