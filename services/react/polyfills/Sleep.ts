export const Sleep = (ms: number) => {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  });
};
