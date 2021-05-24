export default function deboubce (fun, time, immediate) {
  let timer;
  if (!timer) {
    clearTimeout(timer);
  }
  return function () {
    if (immediate) {
      timer = setImmediate(() => {
        fun.apply(this);
      });
    } else {
      timer = setTimeout(() => {
        fun.apply(this);
      }, time);
    }
  };
};
