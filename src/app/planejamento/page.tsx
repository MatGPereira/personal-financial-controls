import { fetchCategories } from "./_actions/fetch-categories";
import Article from "../_components/Article";
import FooterPlanning from "../_components/FooterPlanning";
import ListPlanning from "../_components/ListPlanning";

export default async function Page() {
  const categories = await fetchCategories();

  return (
    <div className="flex flex-col gap-y-4">
      <section className="flex flex-col gap-y-2">
        <Article>
          <div>
            <h2 className="text-sm font-medium text-zinc-600">
              Despesas Fixas
            </h2>
            <span className="text-xl font-bold text-zinc-800">
              R$ 1,479.90
            </span>
          </div>
        </Article>
        <Article>
          <div>
            <h2 className="text-sm font-medium text-zinc-600">
              Despesas Vatiáveis
            </h2>
            <span className="text-xl font-bold text-zinc-800">
              R$ 1,100.00
            </span>
          </div>
        </Article>
        <Article>
          <div>
            <h2 className="text-sm font-medium text-zinc-600">
              Despesas Essesnciais
            </h2>
            <span className="text-xl font-bold text-zinc-800">
              R$ 430,00
            </span>
          </div>
        </Article>
        <Article>
          <div>
            <h2 className="text-sm font-medium text-zinc-600">
              Total Planejado
            </h2>
            <span className="text-xl font-bold text-zinc-800">
              R$ 3,009.90
            </span>
          </div>
        </Article>
      </section>
      <section className="flex flex-col gap-y-2">
        {categories.length > 0
          && categories.map(category => (
            <Article key={category.id}>
              <div className="w-full">
                <header className="w-full mb-4">
                  <h2 className="font-bold">{category.name}</h2>
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
                        <p className="text-zinc-400">
                          Não há nenhuma {category.name.toLocaleLowerCase()} no momento
                        </p>
                        <p className="text-blue-400">
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
