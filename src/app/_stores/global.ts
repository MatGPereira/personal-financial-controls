import { create } from 'zustand';

import type { Decimal } from 'decimal.js';

import { prisma } from '@/db';

type Expenses = {
  id: number;
  amount: Decimal;
  categoryId: number;
  name: string;
  description: string | null;
  userId: number;
  createdAt: Date;
};

type Categories = {
  id: number;
  name: string;
  description: string | null
  expenses: Expenses[];
}

type ExpensesStore = {
  categories: Categories[];

  setCategories(categories: Categories[]): void;
};

const useGlobalStore = create<ExpensesStore>(set => ({
  categories: [],

  setCategories(categories: Categories[]) {
    set(() => ({
      categories,
    }));
  },
}));

export { useGlobalStore };
