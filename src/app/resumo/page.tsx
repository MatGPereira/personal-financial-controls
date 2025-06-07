import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

import Article from "../_components/Article";

export default function Page() {
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
              R$ 4,500.00
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
              R$ 322,20
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
            <span className="text-blue-700 text-xl font-bold">
              R$ 4,177.80
            </span>
          </div>
        </Article>
      </section>
      <section className="flex flex-col gap-y-2">
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold">Gastos por Categoria</h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-500">Alimentação</dt>
                <dd className="text-zinc-800">R$ 156,60</dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-500">Transporte</dt>
                <dd className="text-zinc-800">R$ 89,90</dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-500">Entretenimento</dt>
                <dd className="text-zinc-800">R$ 29.90</dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-500">Saúde</dt>
                <dd className="text-zinc-800">R$ 45.60</dd>
              </div>
            </dl>
          </div>
        </Article>
        <Article>
          <div className="w-full">
            <header className="w-full mb-4">
              <h2 className="font-bold">Planejado vs Realizado</h2>
            </header>
            <dl className="flex flex-col gap-y-2">
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-500">Total Receitas</dt>
                <dd className="text-green-600 font-bold">R$ 4,500.00</dd>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <dt className="text-zinc-500">Total Planejado</dt>
                <dd className="text-zinc-800">R$ 3,009.90</dd>
              </div>
            </dl>
            <footer className="w-full border-t border-t-zinc-200 mt-2 pt-2">
              <dl className="flex items-center justify-between">
                <dt className="font-bold">Diferença</dt>
                <dd className="text-green-600 font-bold">R$ 1,490.10</dd>
              </dl>
            </footer>
          </div>
        </Article>
      </section>
    </div>
  );
}
