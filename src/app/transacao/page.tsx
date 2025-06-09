import { Calendar } from "lucide-react";

export default function Page() {
  return (
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
      <div className="">
        <div className="p-4 flex items-center justify-between border-y-zinc-200 dark:border-y-gray-700 border-t">
          <div>
            <h3 className="font-bold">Supermercado Extra</h3>
            <div className="inline-flex items-center gap-x-2 text-sm text-zinc-500">
              <Calendar size={14} />
              <time className="dark:text-gray-400">03/06/2025</time>
              <span className="dark:bg-gray-700 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs dark:text-gray-400">
                débito
              </span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-red-600 font-bold">-R$ 156,80</span>
            <span className="text-sm text-zinc-500 dark:text-gray-400">Alimentação</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between border-y-zinc-200 dark:border-y-gray-700 border-t">
          <div>
            <h3 className="font-bold">Salário</h3>
            <div className="inline-flex items-center gap-x-2 text-sm text-zinc-500">
              <Calendar size={14} />
              <time className="dark:text-gray-400">04/06/2025</time>
              <span className="dark:bg-gray-700 bg-gray-100 text-gray-700 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                pix
              </span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-green-600 font-bold">R$ 4,500.00</span>
            <span className="text-sm text-zinc-500 dark:text-gray-400">Receita</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between border-y-zinc-200 dark:border-y-gray-700 border-t">
          <div>
            <h3 className="font-bold">Posto Shell</h3>
            <div className="inline-flex items-center gap-x-2 text-sm text-zinc-500">
              <Calendar size={14} />
              <time className="dark:text-gray-400">02/06/2025</time>
              <span className="dark:bg-gray-700 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs dark:text-gray-400">
                débito
              </span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-red-600 font-bold">-R$ 89,90</span>
            <span className="text-sm text-zinc-500 dark:text-gray-400">Transporte</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between border-y-zinc-200 dark:border-y-gray-700 border-t">
          <div>
            <h3 className="font-bold">Netflix</h3>
            <div className="inline-flex items-center gap-x-2 text-sm text-zinc-500">
              <Calendar size={14} />
              <time className="dark:text-gray-400">01/06/2025</time>
              <span className="dark:bg-gray-700 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs dark:text-gray-400">
                débito
              </span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-red-600 font-bold">-R$ 29,90</span>
            <span className="text-sm text-zinc-500 dark:text-gray-400">Entretenimento</span>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between border-y-zinc-200 dark:border-y-gray-700 border-t">
          <div>
            <h3 className="font-bold">Farmácia</h3>
            <div className="inline-flex items-center gap-x-2 text-sm text-zinc-500">
              <Calendar size={14} />
              <time className="dark:text-gray-400">31/05/2025</time>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs dark:text-gray-400 dark:bg-gray-700">
                débito
              </span>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-red-600 font-bold">-R$ 45,60</span>
            <span className="text-sm text-zinc-500 dark:text-gray-400">Saúde</span>
          </div>
        </div>
      </div>
    </section>
  );
}
