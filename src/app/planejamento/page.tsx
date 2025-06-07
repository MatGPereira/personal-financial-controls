import { Plus, Trash2 } from "lucide-react";
import Article from "../_components/Article";

export default function Page() {
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
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold">Despesas Fixas</h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Aluguel</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 1,200.00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Internet</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 99,90
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Energia Elétrica</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 180,00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
            </dl>
            <footer className={`border-t border-t-zinc-200 mt-4 pt-4
              flex items-center gap-x-2
            `}>
              <div className="flex items-center gap-x-2 flex-1">
                <input
                  type="text"
                  placeholder="Despesa"
                  className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
                    focus:ring-2 transition-colors bg-white border-zinc-300
                    text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
                    flex-1 placeholder:text-sm
                  `}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
                    focus:ring-2 transition-colors bg-white border-zinc-300
                    text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
                    flex-1 placeholder:text-sm
                  `}
                />
              </div>
              <button
                className={`px-4 py-2 rounded-lg inline-flex items-center
                  transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
                `}
                type="button"
              >
                <Plus />
              </button>
            </footer>
          </div>
        </Article>
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold">Despesas Variáveis</h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Alimentação</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 600,00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Transporte</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 300,00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Lazer</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 200,00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
            </dl>
            <footer className={`border-t border-t-zinc-200 mt-4 pt-4
              flex items-center gap-x-2
            `}>
              <div className="flex items-center gap-x-2 flex-1">
                <input
                  type="text"
                  placeholder="Despesa"
                  className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
                    focus:ring-2 transition-colors bg-white border-zinc-300
                    text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
                    flex-1 placeholder:text-sm
                  `}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
                    focus:ring-2 transition-colors bg-white border-zinc-300
                    text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
                    flex-1 placeholder:text-sm
                  `}
                />
              </div>
              <button
                className={`px-4 py-2 rounded-lg inline-flex items-center
                  transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
                `}
                type="button"
              >
                <Plus />
              </button>
            </footer>
          </div>
        </Article>
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold">Despesas Essenciais</h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Medicamentos</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 150,00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-700">Seguro Saúde</dt>
                <dd className="font-medium text-zinc-800 inline-flex items-center gap-x-1">
                  R$ 280,00
                  <button
                    className="text-red-500 hover:text-red-700 p-1 transition-colors"
                    type="button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden={true}
                    />
                  </button>
                </dd>
              </div>
            </dl>
            <footer className={`border-t border-t-zinc-200 mt-4 pt-4
              flex items-center gap-x-2
            `}>
              <div className="flex items-center gap-x-2 flex-1">
                <input
                  type="text"
                  placeholder="Despesa"
                  className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
                    focus:ring-2 transition-colors bg-white border-zinc-300
                    text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
                    flex-1 placeholder:text-sm
                  `}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className={`w-24 px-3 py-2 border rounded-lg focus:outline-none
                    focus:ring-2 transition-colors bg-white border-zinc-300
                    text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
                    flex-1 placeholder:text-sm
                  `}
                />
              </div>
              <button
                className={`px-4 py-2 rounded-lg inline-flex items-center
                  transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
                `}
                type="button"
              >
                <Plus />
              </button>
            </footer>
          </div>
        </Article>
      </section>
    </div>
  );
}
