// const debounce = (fn, timeout, isImmediate = true) => {
//   let timer = null;
//   const later = params => {
//     timer = setTimeout(() => {
//       fn(params);
//     }, timeout);
//   };
//   return params => {
//     console.log("timer", timer);
//     if (timer) {
//       clearInterval(timer);
//       timer = null;
//       later(params);
//     } else {
//       if (isImmediate) {
//         fn(params);
//       }
//       later(params);
//     }
//   };
// };
// debounce(
//   () => {
//     console.log("hello");
//   },
//   200,
//   false
// );

// const throttle = (fn, timeout) => {
//   let canRun = true;
//   return () => {
//     if (canRun) {
//       canRun = false;
//       fn();
//       setTimeout(() => {
//         canRun = true;
//       }, timeout);
//     }
//   };
// };
console.log("start");
setTimeout(() => {
  console.log("settimeout");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise2");
  });
Promise.resolve()
  .then(() => {
    console.log("promise3");
  })
  .then(() => {
    console.log("promise4");
  });
console.log("end");
