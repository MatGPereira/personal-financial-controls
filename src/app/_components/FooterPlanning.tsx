'use client';

import { useActionState, useEffect } from "react";
import { LoaderCircle, Plus } from "lucide-react";
import { toast } from "sonner";
import { createExpense } from "../planejamento/_actions/create-expense";

type FooterPlanningProps = {
  categoryId: number;
};

export default function FooterPlanning({ categoryId }: FooterPlanningProps) {
  const createExpenseWithCategoryId = createExpense.bind(null, categoryId);

  const [state, formAction, pending] = useActionState(
    createExpenseWithCategoryId,
    {
      errors: {},
      createdExpense: {},
    }
  );

  useEffect(() => {
    if(Object.entries(state.errors).length > 0) {
      const errorMessages = Object.values(state.errors)
        .flat()
        .filter(Boolean)
        .join('\n');

      toast.error(errorMessages);
      return;
    }

    if(Object.entries(state.createdExpense).length > 0)
      toast.success('Despesa adicionada com sucesso!');
  }, [state]);

  return (
    <footer className={`border-t border-t-zinc-200 mt-4 pt-4
      flex items-center gap-x-2 dark:border-t-gray-700
    `}>
      <form
        id={`expenses-${categoryId}`}
        className="flex items-center gap-x-2 flex-1"
        action={formAction}
      >
        <input
          type="text"
          placeholder="Despesa"
          className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
            focus:ring-2 transition-colors bg-white border-zinc-300
            text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
            flex-1 placeholder:text-sm dark:bg-gray-700 dark:border-gray-600
            dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-gray-500
          `}
          name="name"
        />
        <input
          type="text"
          placeholder="Valor"
          className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
            focus:ring-2 transition-colors bg-white border-zinc-300
            text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
            flex-1 placeholder:text-sm dark:bg-gray-700 dark:border-gray-600
            dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-gray-500
          `}
          name="amount"
        />
      </form>
      <button
        className={`px-4 py-2 rounded-lg inline-flex items-center
          transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
          disable:bg-zinc-700 disable:cursor-not-allowed dark:bg-gray-600
          dark:text-gray-100 dark:hover:bg-gray-500
        `}
        type="submit"
        form={`expenses-${categoryId}`}
        disabled={pending}
      >
        {pending
          ? <LoaderCircle
              className="animate-spin"
              aria-hidden={true}
            />
          : <Plus aria-hidden={true} />}
      </button>
    </footer>
  );
}
