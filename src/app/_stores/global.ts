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
}

type ExpensesStore = {
  expenses: Expenses[];
  categories: Categories[];
  fetchCategories(): Promise<void>;
  fetchExpenses(): Promise<void>;
};

const useGlobalStore = create<ExpensesStore>(set => ({
  expenses: [],
  categories: [],

  async fetchCategories() {
    const categories = await prisma.categories.findMany();
    set(() => ({
      categories,
    }));
  },

  async fetchExpenses() {
    const expenses = await prisma.expenses.findMany({
      where: {
        userId: 1,
      }
    });

    set(() => ({
      expenses,
    }));
  }
}));

export { useGlobalStore };
