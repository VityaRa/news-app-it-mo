export const sleep = (ms = 1000) => {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};
