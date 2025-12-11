import { defineMiddleware } from "astro:middleware";
import { asyncLocalStorage } from "./app/runtimeContext";

export const onRequest = defineMiddleware((context, next) => {
  const runtimeEnv = context.locals.runtime.env;

  if (!runtimeEnv) {
    return next();
  }
  return asyncLocalStorage.run(runtimeEnv, () => {
    return next();
  });
});