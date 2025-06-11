import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

import Article from "../_components/Article";
import { pluggy } from "../_lib/integrations/pluggy";
import { env } from "../_lib/env";
import { expensesSummary } from "../planejamento/_actions/expenses-summary";
import { Transaction } from "pluggy-sdk";

export default async function Page() {

  const today = new Date();
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );

  const transactions = await pluggy.fetchTransactions(env.PLUGGY_ACCOUNT_ID, {
    from: firstDayOfMonth.toISOString(),
    to: new Date().toISOString(),
  });

  const totalIncomesByManySources = transactions.results.reduce((prev, acc) => {
    if(acc.amount < 0) return prev;

    return prev += acc.amount
  }, 0);

  const totalOutcomesByManyResources = transactions.results.reduce((prev, acc) => {
    if(acc.amount > 0) return prev;

    return prev -= acc.amount
  }, 0);

  const totalAmount = totalIncomesByManySources - totalOutcomesByManyResources;
  const summary = await expensesSummary();

  const differenceBetweenIncomeAndSchedule = totalIncomesByManySources - summary.total.toNumber();

  const spendingGroupedByCategories = Object.groupBy(transactions.results,
    ({ category }) => category ?? 'Não informado'
  );
  const totalSpendingByCategory = Object.entries(spendingGroupedByCategories).map(([key, transaction]) => {
    const transactionSumByCategory = transaction?.reduce((prev, cur) => {
      if(cur.category !== key) return prev;

      return prev += cur.amount;
    }, 0);

    return ({
      category: key,
      amount: transactionSumByCategory ?? 0,
    });
  });

  const transactionCategoryTranslate = {
    shopping: 'compras',
    transfers: 'transferência',
    mobile: 'celular',
    'loans and financing': 'empréstimos e financiamentos',
    'eating out': 'comer fora',
    'transfer - internal': 'transferência interna',
    'same person transfer': 'tranferência para mesma pessoa'
  } as const;

  return (
    <div className="flex flex-col gap-y-4">
      <section className="flex flex-col gap-y-2">
        <Article>
          <span className="bg-green-100 rounded-full p-2">
            <TrendingUp
              className="text-green-600"
              size={20}
            />
          </span>
          <div>
            <h2 className="text-green-600 font-medium">Receitas</h2>
            <span className="text-green-700 text-xl font-bold">
              {Intl
                .NumberFormat('pt-BR',
                  {
                    currency: 'BRL',
                    style: 'currency'
                  }
                )
                .format(totalIncomesByManySources)}
            </span>
          </div>
        </Article>
        <Article>
          <span className="bg-red-100 rounded-full p-2">
            <TrendingDown
              className="text-red-600"
              size={20}
            />
          </span>
          <div>
            <h2 className="text-red-600 font-medium">Gastos</h2>
            <span className="text-red-700 text-xl font-bold">
              {Intl
                .NumberFormat('pt-BR',
                  {
                    currency: 'BRL',
                    style: 'currency'
                  }
                )
                .format(totalOutcomesByManyResources)}
            </span>
          </div>
        </Article>
        <Article>
          <span className="bg-blue-100 rounded-full p-2">
            <DollarSign
              className="text-blue-600"
              size={20}
            />
          </span>
          <div>
            <h2 className="text-blue-600 font-medium">Saldo Atual</h2>
            <span className={`
              ${totalAmount > 0 ? 'text-blue-700' : 'text-orange-700'}
              text-xl font-bold
            `}>
              {Intl
                .NumberFormat('pt-BR',
                  {
                    currency: 'BRL',
                    style: 'currency'
                  }
                )
                .format(totalAmount)}
            </span>
          </div>
        </Article>
      </section>
      <section className="flex flex-col gap-y-2">
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold text-zinc-800 dark:text-gray-100">
                Gastos por Categoria
              </h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              {totalSpendingByCategory.map(resume => (
                <div
                  key={resume.category}
                  className="inline-flex items-center justify-between w-full"
                >
                  <dt
                    title={transactionCategoryTranslate[resume.category.toLowerCase() as keyof typeof transactionCategoryTranslate]}
                    className="text-zinc-600 dark:text-gray-300"
                  >
                   {transactionCategoryTranslate[resume.category.toLowerCase() as keyof typeof transactionCategoryTranslate].length > 15
                    ? transactionCategoryTranslate[resume.category.toLowerCase() as keyof typeof transactionCategoryTranslate].slice(0, 15).concat('...')
                    : transactionCategoryTranslate[resume.category.toLowerCase() as keyof typeof transactionCategoryTranslate]}
                  </dt>
                  <dd className="text-zinc-800 dark:text-gray-100">
                    {Intl
                      .NumberFormat('pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL'
                        }
                      ).format(resume.amount)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Article>
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold text-zinc-800 dark:text-gray-100">
                Planejado vs Realizado
              </h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-600 dark:text-gray-300">
                  Total Receitas
                </dt>
                <dd className="text-green-600 font-bold">
                  {Intl
                    .NumberFormat('pt-BR',
                      {
                        currency: 'BRL',
                        style: 'currency'
                      }
                    )
                    .format(totalIncomesByManySources)}
                </dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-600 dark:text-gray-300">
                  Total Planejado
                </dt>
                <dd className="text-zinc-800 dark:text-gray-100">
                  {Intl
                    .NumberFormat(
                      'pt-BR',
                      {
                        currency: 'BRL',
                        style: 'currency'
                      }
                    )
                    .format(summary.total.toNumber())}
                </dd>
              </div>
            </dl>
            <footer className="w-full border-t border-t-zinc-200 mt-2 pt-2">
              <dl className="flex items-center justify-between">
                <dt className="text-zinc-600 dark:text-gray-300 font-bold">
                  Diferença
                </dt>
                <dd className={`
                  ${differenceBetweenIncomeAndSchedule > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                  }
                   font-bold
                `}>
                  {Intl
                    .NumberFormat(
                      'pt-BR',
                      {
                        currency: 'BRL',
                        style: 'currency'
                      }
                    )
                    .format(differenceBetweenIncomeAndSchedule)}
                </dd>
              </dl>
            </footer>
          </div>
        </Article>
      </section>
    </div>
  );
}
