import { Redis } from 'ioredis';

export const CACHE_EXPIRY = 1800;

export const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT as string) || 6379,
  password: process.env.REDIS_PASSWORD,
});
