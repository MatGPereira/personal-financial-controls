
'use server';

import { revalidatePath } from 'next/cache';

import z from 'zod';

import { prisma } from '@/db';

const baseDeleteExpenseSchema = z.object({
  id: z.coerce.number().min(1),
});

function validateBaseExpenseSchema(expenseId: number) {
  const fixedDeleteExpense: z.infer<typeof baseDeleteExpenseSchema> = {
    id: expenseId,
  }
  const validatedBaseExpenseSchema = baseDeleteExpenseSchema.safeParse(fixedDeleteExpense);

  return validatedBaseExpenseSchema.error;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
async function deleteExpense(expenseId: number, prevState: any) {
  const validatedDeleteFixedExpense = validateBaseExpenseSchema(expenseId);
  if(validatedDeleteFixedExpense) {
    return {
      errors: validatedDeleteFixedExpense.flatten().fieldErrors,
    }
  }

  await prisma.expenses.delete({
    where: {
      id: expenseId,
    }
  });

  revalidatePath('/planejamento')

  return { errors: {} };
}

export {
  deleteExpense,
};
