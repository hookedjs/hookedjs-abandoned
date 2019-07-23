export const Repeat = async (callback: () => any, delay_ms: number, count: number) => {
  let currentCount = 0;
  return new Promise(function(resolve, reject) {
    const interval = setInterval(() => {
      callback();
      currentCount++;
      if (count >= currentCount) {
        clearInterval(interval);
        resolve();
      }
    }, delay_ms);
  });
};
