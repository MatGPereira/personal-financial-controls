import { env } from '../_lib/env';
import { pluggy } from '../_lib/integrations/pluggy';
import Transactions from './_components/transactions';
import UpdateNubankData from './_components/update-nubank-data';

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

  return (
    <div className="flex flex-col gap-y-2">
      <UpdateNubankData />
      <section className={`bg-white rounded-lg border-zinc-200 border
        dark:bg-gray-800 dark:border-gray-700
      `}>
        <header className="border-b-zinc-200 dark:border-b-gray-700 dark:text-gray-100">
          <div className="p-4">
            <h2 className="font-semibold text-zinc-800 dark:text-gray-100">
              Transações Recentes
            </h2>
            <p className="text-sm text-zinc-500 dark:text-gray-400">
              Dados integrados com Nubank
            </p>
          </div>
        </header>
        <div>
          {transactions.results.length > 0
            ? transactions.results.map(transaction => (
              <Transactions
                key={transaction.id}
                amount={transaction.amount}
                category={transaction.category}
                date={transaction.date}
                paymentType={transaction.type}
                title={transaction.description}
              />
            ))
            : (null)}
        </div>
      </section>
    </div>
  );
}
