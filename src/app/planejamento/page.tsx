import { fetchCategories } from "./_actions/fetch-categories";
import Article from "../_components/Article";
import FooterPlanning from "../_components/FooterPlanning";
import ListPlanning from "../_components/ListPlanning";
import { expensesSummary } from "./_actions/expenses-summary";

export default async function Page() {
  const [categories, summary] = await Promise.all([
    fetchCategories(),
    expensesSummary(),
  ]);

  return (
    <div className="flex flex-col gap-y-4">
      <section className="flex flex-col gap-y-2">
        <Article>
          <div>
            <h2 className="text-sm font-medium text-zinc-600 dark:text-gray-300">
              Total Planejado
            </h2>
            <span className="text-xl font-bold text-zinc-800 dark:text-gray-100">
              R$ {summary.total?.toNumber().toFixed(2)}
            </span>
          </div>
        </Article>
        {Object.entries(summary.categories).length > 0
          && summary.categories.map(resume => (
            <Article key={resume.categoryId}>
              <div>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-gray-300">
                  {resume.name}
                </h2>
                <span className="text-xl font-bold text-zinc-800 dark:text-gray-100">
                  R$ {resume.amount.toNumber().toFixed(2)}
                </span>
              </div>
            </Article>
          ))
        }
      </section>
      <section className="flex flex-col gap-y-2">
        {categories.length > 0
          && categories.map(category => (
            <Article key={category.id}>
              <div className="w-full">
                <header className="w-full mb-4">
                  <h2 className="font-bold text-zinc-700 dark:text-gray-300">
                    {category.name}
                  </h2>
                </header>
                <dl className="flex flex-col gap-y-2">
                  {category.Expenses.length > 0
                    ? category.Expenses.map(expense => {
                      const convertedExpense = {
                        ...expense,
                        amount: expense.amount.toNumber()
                      };
                      return (
                        <ListPlanning
                          key={expense.id}
                          expense={convertedExpense}
                        />
                      )
                    })
                    : (
                      <>
                        <p className="text-zinc-400 dark:text-gray-100">
                          Não há nenhuma {category.name.toLocaleLowerCase()} no momento
                        </p>
                        <p className="text-blue-400 dark:text-blue-200">
                          Adicione as suas primeiras {category.name.toLocaleLowerCase()}
                        </p>
                      </>
                    )
                  }
                </dl>
                <FooterPlanning categoryId={category.id} />
              </div>
            </Article>
          ))
        }
      </section>
    </div>
  );
}
