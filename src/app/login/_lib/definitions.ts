import z from "zod";

const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, entre com um e-mail válido' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Ter pelo menos 8 caracteres' })
    .regex(/[a-zA-Z]/, { message: 'Conter pelo menos uma letra' })
    .regex(/[0-9]/, { message: 'Conter pelo menos um número' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Conter pelo menos um caractere especial',
    })
    .trim(),
});

type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined;

export type { FormState };
export { SignInFormSchema };
