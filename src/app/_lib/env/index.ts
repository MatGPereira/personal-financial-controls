import { z } from 'zod';

const envSchema  = z.object({
  DATABASE_URL: z.string(),
  SESSION_SECRET: z.string(),
  PLUGGY_ACCOUNT_ID: z.string().uuid(),
  PLUGGY_CLIENT_ID: z.string().uuid(),
  PLUGGY_CLIENT_SECRET: z.string().uuid(),
  PLUGGY_ITEM_ID: z.string().uuid(),
});

const _env = envSchema.safeParse(process.env);

if(_env.error) {
  throw new Error('Any environment variable is not defined!');
}

const env = _env.data;

export { env };
