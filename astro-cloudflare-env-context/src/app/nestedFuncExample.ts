import { getServerContext } from "src/app/serverStore";

export const nestedFuncExample = () => {
  const { testVariable } = getServerContext();
  console.log('testVariable: ', testVariable);
};
