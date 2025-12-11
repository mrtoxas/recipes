import { nestedFuncExample } from "src/app/nestedFuncExample";
import { getRuntimeEnv } from "src/app/runtimeContext";

export async function GET() {
  const testVariable = getRuntimeEnv("TEST_VARIABLE");

  nestedFuncExample();

  return new Response(testVariable);
}