"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { CreditCard, Tag, TrendingUp } from "lucide-react";

export default function NavLinks() {
  const path = usePathname();

  return (
    <nav className={`pt-4 pb-0 border-y border-y-zinc-200
      overflow-x-auto dark:border-y-gray-700
    `}>
      <ul className="flex items-center justify-between">
        <li className={clsx('pl-4 pb-1', {
          'text-zinc-700 dark:text-gray-100 border-b-3 border-b-gray-600': path === '/resumo'
        })}>
          <Link
            className={clsx(`inline-flex items-center gap-x-1 text-zinc-400
              font-bold text-sm`,
              {
                'text-zinc-600 hover:text-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-200': path === '/resumo'
              }
            )}
            href="/resumo"
          >
            <TrendingUp />
            Resumo
          </Link>
        </li>
        <li className={clsx('pl-1 pb-1', {
          'text-zinc-700 border-b-3 border-b-zinc-600': path === '/transacao'
        })}>
          <Link
            className={clsx(`inline-flex items-center gap-x-1 text-zinc-400
              font-bold text-sm`,
              {
                'text-zinc-600 hover:text-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-200': path === '/transacao'
              }
            )}
            href="/transacao"
          >
            <CreditCard />
            Transações
          </Link>
        </li>
        <li className={clsx('pl-1 pb-1 pr-4', {
          'text-zinc-700 border-b-3 border-b-zinc-600': path === '/planejamento'
        })}>
          <Link
            className={clsx(`inline-flex items-center gap-x-1 text-zinc-400
              font-bold text-sm`,
              {
                'text-zinc-600 hover:text-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-200': path === '/planejamento'
              }
            )}
            href="/planejamento"
          >
            <Tag />
            Planejamento
          </Link>
        </li>
      </ul>
    </nav>
  );
}
