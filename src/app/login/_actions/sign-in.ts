'use server';

import type { FormState } from '../_lib/definitions';
import { SignInFormSchema } from '../_lib/definitions';
import { prisma } from '@/db';
import { compare } from 'bcrypt';
import { createSession } from '../_lib/sessions';
import { redirect } from 'next/navigation';

async function signIn(state: FormState, formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data;
  const userWithEmail = await prisma.users.findFirst({
    where: {
      email,
    },
  });
  if(!userWithEmail) {
    return {
      errors: {
        password: ['Senha ou e-mail inválidos!'],
        email: [],
      }
    };
  }

  const isValid = await compare(password, userWithEmail.password);
  if(!isValid) {
    return {
      errors: {
        password: ['Senha ou e-mail inválidos!'],
        email: [],
      }
    };
  }

  await createSession(userWithEmail.id);
  redirect('/planejamento');
}

export { signIn };
