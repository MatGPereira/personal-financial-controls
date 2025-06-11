'use client';

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { LoaderCircle, Trash2 } from "lucide-react";
import { deleteExpense } from "../planejamento/_actions/delete-expense";

type ListPlanningProps = {
  expense: any;
};

export default function ListPlanning({ expense }: ListPlanningProps) {
  const deleteExpenseWithId = deleteExpense.bind(null, expense.id)

  const [state, formAction, pending] = useActionState(
    deleteExpenseWithId,
    {
      errors: {},
      deletedExpense: {},
    }
  );

  useEffect(() => {
    if(Object.entries(state.errors).length > 0) {
      toast.error('Ops! Entre em contato com (16) 99366-8935 para solucionar o problema!');
      return;
    }

    if(Object.entries(state.deletedExpense).length > 0)
      toast.success('Despesa adicionada com sucesso!');
  }, [state]);

  return (
    <div className="inline-flex items-center justify-between w-full">
      <dt className="text-zinc-700 dark:text-gray-300">
        {expense.name}
      </dt>
      <dd className="font-medium text-zinc-800 dark:text-gray-100 inline-flex items-center gap-x-1">
        {Intl
          .NumberFormat('pt-BR',
            {
              currency: 'BRL',
              style: 'currency'
            }
          )
          .format(expense.amount)}
        <form action={formAction}>
          <button
            className={`text-red-500 hover:text-red-700 p-1 transition-colors
              disabled:bg-zinc-400/75 disabled:cursor-not-allowed rounded-lg
              bg-red-500/10 hover:bg-red-700/10 cursor-pointer
            `}
            type="submit"
            disabled={pending}
          >
            {pending
              ? <LoaderCircle
                  size={16}
                  aria-hidden={true}
                  className="animate-spin"
                />
              : <Trash2
                  size={16}
                  aria-hidden={true}
                />
            }
          </button>
        </form>
      </dd>
    </div>
  );
}
