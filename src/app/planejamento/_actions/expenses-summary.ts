'use server';

import { Decimal } from 'decimal.js';
import { prisma } from '@/db';

type ExpensesSummary = {
  categoryId: number;
  categoryName: string;
  total: Decimal;
};

async function expensesSummary() {
  const total = await prisma.expenses.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      userId: 1,
    },
  });

  const result = await prisma.$queryRaw<ExpensesSummary[]>`
    SELECT
      c.id as "categoryId",
      c.name as "categoryName",
      SUM(e.amount) as "total"
    FROM "Expenses" e
    JOIN "Categories" c ON e.category_id = c.id
    WHERE e.user_id = 1
    GROUP BY c.id, c.name
  `;

  return {
    total: total._sum.amount || new Decimal(0),
    categories: result.map(group => ({
      categoryId: group.categoryId,
      amount: group.total,
      name: group.categoryName
    })),
  }
}

export type { ExpensesSummary };
export { expensesSummary };
