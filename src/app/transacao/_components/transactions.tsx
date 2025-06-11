'use client';

import { useState } from "react";
import { Calendar } from "lucide-react";

type TransactionsProps = {
  title: string;
  amount: number;
  category: string | null;
  date: Date;
  paymentType: string;
};

const paymentTypeTranslate = {
  debit: 'débito',
  credit: 'crédito',
} as const;

const transactionCategoryTranslate = {
  shopping: 'compras',
  transfers: 'transferência',
  mobile: 'celular',
  'loans and financing': 'empréstimos e financiamentos',
  'eating out': 'comer fora',
  'transfer - internal': 'transferência interna',
  'same person transfer': 'tranferência para mesma pessoa'
} as const;

export default function Transactions({
  amount,
  category,
  date,
  title,
  paymentType
}: TransactionsProps) {
  return (
    <div className="p-4 flex items-center justify-between border-y-zinc-200 dark:border-y-gray-700 border-t">
      <div>
        <h3
          title={title}
          className="font-bold"
        >
          {title.length > 15 ? title.slice(0, 20).concat('...') : title}
        </h3>
        <div className="inline-flex items-center gap-x-2 text-sm text-zinc-500">
          <Calendar size={14} />
          <time
            dateTime={date.toLocaleDateString()}
            className="dark:text-gray-400"
          >
            {date.toLocaleDateString()}
          </time>
          <span className="dark:bg-gray-700 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs dark:text-gray-400">
            {paymentTypeTranslate[paymentType.toLowerCase() as 'credit' | 'debit']}
          </span>
        </div>
      </div>
      <div className="flex flex-col text-right">
        <span className={`${amount > 0 ? 'text-green-600' : 'text-red-600'} font-bold`}>
          {Intl
            .NumberFormat('pt-BR',
              {
                currency: 'BRL',
                style: 'currency'
              }
            )
            .format(amount).replace('-', '')}
        </span>
        <span className="text-sm text-zinc-500 dark:text-gray-400">
          {transactionCategoryTranslate[category?.toLowerCase() as keyof typeof transactionCategoryTranslate] ?? '-'}
        </span>
      </div>
    </div>
  );
}
