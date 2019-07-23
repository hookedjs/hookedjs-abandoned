/**
 * Borrowed from just-debounce
 * Is a minimal debounce with no dependencies
 **/

export function Debounce(fn: () => void, delay: number, at_start?: boolean, guarantee?: boolean) {
  var timeout: any;
  var args: any;
  var self: any;

  return function debounced() {
    // @ts-ignore: Ignoring 'this' implicit any
    self = this;
    args = Array.prototype.slice.call(arguments);

    if (timeout && (at_start || guarantee)) {
      return;
    } else if (!at_start) {
      clear();

      timeout = setTimeout(run, delay);
      return timeout;
    }

    timeout = setTimeout(clear, delay);
    fn.apply(self, args);

    function run() {
      clear();
      fn.apply(self, args);
    }

    function clear() {
      clearTimeout(timeout);
      timeout = null;
    }

    return null;
  };
}
