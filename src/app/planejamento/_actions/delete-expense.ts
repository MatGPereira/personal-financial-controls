
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


async function deleteExpense(expenseId: number, prevState: any) {
  const validatedDeleteFixedExpense = validateBaseExpenseSchema(expenseId);
  if(validatedDeleteFixedExpense) {
    return {
      errors: validatedDeleteFixedExpense.flatten().fieldErrors,
      deletedExpense: {},
    }
  }

  const deletedExpense = await prisma.expenses.delete({
    where: {
      id: expenseId,
    }
  });

  revalidatePath('/planejamento')

  return {
    errors: {},
    deletedExpense,
  };
}

export {
  deleteExpense,
};
