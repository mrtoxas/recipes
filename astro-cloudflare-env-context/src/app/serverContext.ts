import type { APIContext } from "astro";
import { serverStore } from "src/app/serverStore";

export function withServerContext(handler: () => Promise<Response>) {
  return async (context: APIContext) => {
    const { TEST_VARIABLE } = context.locals.runtime.env;

    const contextData = {
      testVariable: TEST_VARIABLE
    };

    return serverStore.run(contextData, handler);
  };
}