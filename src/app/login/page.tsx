'use client';

import { useActionState } from "react";
import { signIn } from "./_actions/sign-in";
import { LoaderCircle, Moon } from "lucide-react";

export default function Page() {
  const [state, action, pending] = useActionState(signIn, {
    errors: {}
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-2">
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold mb-1 text-zinc-800">
            Controle Financeiro
          </h1>
          <p className="text-zinc-600 mb-4">Sua vida financeira sob controle</p>
          <div className="text-left">
            <strong className="text-blue-400 font-light text-xl">
              Faça o seu login
            </strong>
          </div>
        </div>
      </div>
      <form
        action={action}
        className={`flex flex-col gap-y-6 w-full bg-white border p-4 rounded-lg
          border-zinc-200 justify-center items-center
        `}
      >
        <fieldset className="flex flex-col gap-y-1 w-full">
          <label
            htmlFor="email"
            className="text-sm"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="exemplo@email.com"
            className={`px-3 py-2 border rounded-lg focus:outline-none
              focus:ring-2 transition-colors bg-white border-zinc-300
              text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
              flex-1 placeholder:text-sm
            `}
          />
        </fieldset>
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <fieldset className="flex flex-col gap-y-1 w-full">
          <label
            htmlFor="password"
            className="text-sm"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className={`px-3 py-2 border rounded-lg focus:outline-none
              focus:ring-2 transition-colors bg-white border-zinc-300
              text-zinc-800 placeholder-zinc-500 focus:ring-zinc-400
              flex-1 placeholder:text-sm
            `}
          />
        </fieldset>
        {state?.errors?.password && (
          <div className="text-red-600 text-sm font-light">
            <p>A senha deve:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          disabled={pending}
          type="submit"
          className={`px-4 py-2 rounded-lg inline-flex items-center
            transitions-color bg-zinc-800 text-zinc-50 hover:bg-zinc-700
            disable:bg-zinc-700 disable:cursor-not-allowed justify-center w-full
          `}
        >
          {pending
            ? <LoaderCircle
                aria-hidden={true}
                className="animate-spin"
              />
            : (<span>Entrar</span>)
          }
        </button>
      </form>
    </div>
  );
}
