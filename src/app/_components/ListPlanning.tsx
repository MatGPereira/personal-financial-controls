'use client';

import { Trash2 } from "lucide-react";
import { deleteExpense } from "../planejamento/_actions/delete-expense";
import { useActionState } from "react";

type ListPlanningProps = {
  expense: any;
};

export default function ListPlanning({ expense }: ListPlanningProps) {
  const deleteExpenseWithId = deleteExpense.bind(null, expense.id)

  const [state, formAction, pending] = useActionState(
      deleteExpenseWithId,
      { errors: {} }
    );

  console.log(state);

  return (
    <div className="inline-flex items-center justify-between w-full">
      <dt className="text-zinc-700">{expense.name}</dt>
      <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
        R$ {expense.amount}
        <form action={formAction}>
          <button
            className={`text-red-500 hover:text-red-700 p-1 transition-colors
              disabled:bg-zinc-400 disabled:cursor-not-allowed
            `}
            type="submit"
            disabled={pending}
          >
            <Trash2
              size={16}
              aria-hidden={true}
            />
          </button>
        </form>
      </dd>
    </div>
  );
}
