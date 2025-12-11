import { AsyncLocalStorage } from 'node:async_hooks';

type ContextData = {
  testVariable: string;
};

export function getServerContext(): ContextData {
  const store = serverStore.getStore();
  if (!store) {
    throw new Error("Server context not initialized");
  }
  return store;
}

export const serverStore = new AsyncLocalStorage<ContextData>();