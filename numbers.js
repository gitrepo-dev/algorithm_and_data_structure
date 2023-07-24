"use strict";

//204. Count Primes

// const countPrimes = function (n) {
 

//   if (n < 3) return 0;

//   const count = new Uint8Array(n);
//   let res = 1;

//   for (let i = 3; i < n; i += 2) {

//     if (!count[i]) {
//         console.log(i)
//       res++;
//       for (let j = i * i; j < n; j += 2 * i) {
//         count[j] = 1;
//       }
//     }
//   }

//   return res;
// };
// const iscountPrimes = countPrimes(200);
// console.log(iscountPrimes, "new result -------");



// function main(n){
//        if (n < 3) return 0;
//     let count = 0;
//     for (let i = 2; i < n; i++) {
//       if (i % 2 !== 0) {
//         if (i % 3 === 0 && 3 * 1 === i) {
//           count++;
//           console.log(i);
//         }
//         if (i % 5 === 0 && 5 * 1 === i) {
//           count++;
//           console.log(i);
//         }
//         if (i % 7 === 0 && 7 * 1 === i) {
//           count++;
//           console.log(i);
//         }
//         // wrong condition
//         if (i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//           count++;
//           console.log(i);
//         }
//       }
//     }
//     return count+1;
// }


// console.log(main(200), 'main resuelt')




// const countPrimes = function (n) {
 

//     if (n < 3) return 0;
  
//     const count = new Uint8Array(n);
//     let res = 1;
  
//     for (let i = 3; i < n; i += 2) {
  
//       if (!count[i]) {
//           console.log(i)
//         res++;
//         for (let j = i * i; j < n; j += 2 * i) {
//           count[j] = 1;
//         }
//       }
//     }
  
//     return res;
//   };
//   const iscountPrimes = countPrimes(200);
//   console.log(iscountPrimes, "new result -------");