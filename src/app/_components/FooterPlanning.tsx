'use client';

import { Plus } from "lucide-react";
import { createExpense } from "../planejamento/_actions/create-expense";
import { useActionState } from "react";

type FooterPlanningProps = {
  categoryId: number;
};

export default function FooterPlanning({ categoryId }: FooterPlanningProps) {
  const createExpenseWithCategoryId = createExpense.bind(null, categoryId);

  const [state, formAction, pending] = useActionState(
    createExpenseWithCategoryId,
    { errors: {} }
  );

  console.log(state);

  return (
    <footer className={`border-t border-t-zinc-200 mt-4 pt-4
      flex items-center gap-x-2
    `}>
      <form
        id="expenses"
        className="flex items-center gap-x-2 flex-1"
        action={formAction}
      >
        <input
          type="text"
          placeholder="Despesa"
          className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
            focus:ring-2 transition-colors bg-white border-zinc-300
            text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
            flex-1 placeholder:text-sm
          `}
          name="name"
        />
        <input
          type="text"
          placeholder="Valor"
          className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
            focus:ring-2 transition-colors bg-white border-zinc-300
            text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
            flex-1 placeholder:text-sm
          `}
          name="amount"
        />
      </form>
      <button
        className={`px-4 py-2 rounded-lg inline-flex items-center
          transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
          disable:bg-zinc-700
        `}
        type="submit"
        form="expenses"
        disabled={pending}
      >
        <Plus />
      </button>
    </footer>
  );
}
