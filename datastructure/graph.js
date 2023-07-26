"use strict";

/* unordered graph shown as a list and matrix*/

// show as list
/* const graph = [
   0 = [1, 2],
   1 = [0, 2, 3],
   2 = [0, 1, 3, 4],
   3 = [1, 2, 4],
   4 = [2, 3],
 ]; */

// show as metrix
/*    0  1  2  3  4 
    0[0, 1  1  0  0]
    1[1  0  1  1  0]
    2[1  1  0  1  1]
    3[0  1  1  0  1]
    4[0  0  1  1  0] 
*/

// BFS search (breath first search)
/* in bfs always given you the start point as index list/matrix and no. of vertics*/
// const graph = [
//   [1, 2],
//   [0, 2, 3],
//   [0, 1, 3, 4],
//   [1, 2, 4],
//   [2, 3],
// ];
// const bfs = (list, v, start) => {
//   // create a array size equal to vertics with false value its element will be true when you visited in list.
//   const vector = new Array(v).fill(0);
//   // to store the index of graph and get the element of that index to check in vector if that index in vector is 0 then do 1.
//   const queue = [];

//   // by default push 0 in queue and true it in vector.
//   vector[start] = 1;
//   queue.push(start);

//   // this loop will run untill queue isEmpty()
//   while (queue.length) {
//     const idx = queue[0];
//     // you are checking the vector is true or not by using idx/index and extrating the list el of that index ex: if idx 1 then 1[0,2,3] so you will check in vector on idx 0,2,3 if 0 then true it to 1 o skip
//     for (let i = 0; i < list[idx].length; i++) {
//       const el = list[idx][i];
//       if (!vector[el]) {
//         vector[el] = 1;
//         queue.push(el);
//       }
//     }
//     queue.shift();
//   }

//   return vector;
// };
// const isbfs = bfs(graph, 5, 0);
// console.log(isbfs);

/* DFS without discontinue */
// const graph = [
//   [1, 2],
//   [0, 2, 3],
//   [0, 1, 3, 4],
//   [1, 2, 4],
//   [2, 3],
// ];

// const dfs = (list, v, start) => {
//   // create a array size equal to vertics with false value its element will be true when you visited in list.
//   const vector = new Array(v).fill(0);
//   // [1,0,0,0,0]
//   // to store the index of graph and get the element of that index to check in vector if that index in vector is 0 then do 1.
//   const queue = [];

//   // by default push 0 in queue and true it in vector.
//   vector[start] = 1;
//   queue.push(start);

//   // dfs recurstion
//   function dfsRecurtion(s) {
//     const idx = queue[s];
//     // you are checking the vector is true or not by using idx/index and extrating the list el of that index ex: if idx 1 then 1[0,2,3] so you will check in vector on idx 0,2,3 if 0 then true it to 1 o skip
//     for (let i = 0; i < list[s].length; i++) {
//       const el = list[idx][i];
//       if (!vector[el]) {
//         vector[el] = 1;
//         queue.push(el);
//         dfsRecurtion(el);
//       }
//     }
//     return vector;
//   }
//   dfsRecurtion(0);

//   return vector;
// };
// const isdfs = dfs(graph, 5, 0);
// console.log(isdfs);


/* Detect cycle in graph */