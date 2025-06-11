import { PluggyClient } from 'pluggy-sdk';
import { env } from '../env';

const pluggy = new PluggyClient({
  clientId: env.PLUGGY_CLIENT_ID,
  clientSecret: env.PLUGGY_CLIENT_SECRET
});

export { pluggy };
