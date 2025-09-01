import { neon, neonConfig } from '@neondatabase/serverless';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

let connectionString = process.env.DATABASE_URL;
// Configuring Neon for local development
if (process.env.VERCEL_ENV === 'development') {
  connectionString = 'postgres://postgres:postgres@db.localtest.me:5432/main';
  neonConfig.fetchEndpoint = (host) => {
    const [protocol, port] = host === 'db.localtest.me' ? ['http', 4444] : ['https', 443];
    return `${protocol}://${host}:${port}/sql`;
  };
  const connectionStringUrl = new URL(connectionString);
  neonConfig.useSecureWebSocket = connectionStringUrl.hostname !== 'db.localtest.me';
  neonConfig.wsProxy = (host) => (host === 'db.localtest.me' ? `${host}:4444/v2` : `${host}/v2`);
}

export const neonSql = neon(connectionString as string);

// eslint-disable-next-line
export async function sql<T>(query: TemplateStringsArray, ...values: any[]): Promise<T[]> {
  return neonSql(query, ...values) as Promise<T[]>;
}
