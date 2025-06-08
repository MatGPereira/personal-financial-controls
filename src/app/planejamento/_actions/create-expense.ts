
'use server';

import { revalidatePath } from 'next/cache';

import z from 'zod';

import { prisma } from '@/db';

const baseExpenseSchema = z.object({
  amount: z.coerce.number().min(0.01, 'O valor da despesa deve ser maior que 1 centavo'),
  name: z.string().min(3, 'O nome da despesa deve possuir mais de 3 caracteres')
});

function validateBaseExpenseSchema(formData: FormData) {
  const fixedExpense: z.infer<typeof baseExpenseSchema> = {
    amount: +formData.get('amount')!,
    name: formData.get('name')!.toString(),
  }
  const validatedBaseExpenseSchema = baseExpenseSchema.safeParse(fixedExpense);

  return validatedBaseExpenseSchema.error;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createExpense(categoryId: number, prevState: any, formData: FormData) {
  const validatedFixedExpense = validateBaseExpenseSchema(formData);
  if(validatedFixedExpense) {
    return {
      errors: validatedFixedExpense.flatten().fieldErrors,
    }
  }

  await prisma.expenses.create({
    data: {
      name: formData.get('name')!.toString(),
      categoryId: categoryId,
      userId: 1,
      amount: +formData.get('amount')!,
    },
  });

  revalidatePath('/planejamento')

  return { errors: {} };
}

export {
  createExpense,
};
