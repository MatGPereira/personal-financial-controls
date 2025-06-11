'use client';

import { RotateCw } from "lucide-react";
import { updateNubankData } from "../_actions/update-nubank-data";

export default function UpdateNubankData() {
  return (
    <form
      className="w-full flex justify-end"
      action={updateNubankData}
    >
      <button
        className={`px-4 py-2 rounded-lg inline-flex items-center
          transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
          disable:bg-zinc-700 disable:cursor-not-allowed justify-center gap-x-2
        `}
        type="submit"
      >
        <RotateCw size={16} />
        Atualizar
      </button>
    </form>
  );
}
