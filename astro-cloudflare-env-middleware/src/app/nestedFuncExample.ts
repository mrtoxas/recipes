import { getRuntimeEnv } from "src/app/runtimeContext";

export const nestedFuncExample = () => {
  const testVariable = getRuntimeEnv("TEST_VARIABLE");
  console.log('testVariable: ', testVariable);
};
