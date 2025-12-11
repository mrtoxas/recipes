import { AsyncLocalStorage } from 'node:async_hooks';

export const asyncLocalStorage = new AsyncLocalStorage<ENV>();

export function getRuntimeEnv<K extends keyof ENV>(key: K): ENV[K] {
  const env = asyncLocalStorage.getStore();
  if (!env?.[key]) {
    throw new Error(`Env "${String(key)}" is missing`);
  }
  return env[key];
}