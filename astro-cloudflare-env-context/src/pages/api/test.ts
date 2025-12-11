import { withServerContext } from "src/app/serverContext";
import { nestedFuncExample } from "src/app/nestedFuncExample";
import { getServerContext } from "src/app/serverStore";

export const GET = withServerContext(async () => {
  const { testVariable } = getServerContext();
  
  nestedFuncExample();

  return new Response(testVariable);
});