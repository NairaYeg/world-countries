/**
 *The debounce()  function forces like an argument accepting function to wait a certain amount of time before running again. 
 * @param {function}-the function which should wait a certain amount of time before running again. 
 * @param {number}-delay, how much  the first parameter should await
 * @returns {function}
 */

export const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  }
  