"use strict";

// max heap
class Maxheap {
  constructor() {
    this.heap = [];
  }

  // add item in heap
  add(item) {
    this.heap.push(item);
    this.buildHeap(this.heap.length - 1);
  }

  // create max heap
  buildHeap(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swip(parentIndex, index);
        index = parentIndex;
      } else break;
    }
  }

  // top most/first el
  top() {
    return this.heap[0];
  }

  // pop
  pop() {
    const maxValue = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.shiftDown(0);
    }
    return maxValue;
  }

  // shiftdown
  shiftDown(index) {
    while (index < this.heap.length) {
      // get index of parent and both child
      let highChildIndex = index;
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;

      // compare if child left greater than parent then change index to swipe child to parent
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[highChildIndex]
      ) {
        highChildIndex = leftChildIndex;
      }

      // compare if child right greater than parent then change index to swipe child to parent
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[highChildIndex]
      ) {
        highChildIndex = rightChildIndex;
      }

      // checking it will not equal if the parent both child is not greater than parent otherwise above condition will change the index of highChildIndex
      if (highChildIndex !== index) {
        this.swip(highChildIndex, index);
        // assign because after swipe now index is highIndex as parent means index is as parent and now compare its child
        index = highChildIndex;
      } else {
        break;
      }
    }
  }

  // swip
  swip(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

//ex: 2 of max heap
class MaxHeapBeta {
  constructor(nums) {
    this.heap = nums;
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  shiftDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let maxIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }

    if (maxIndex !== index) {
      [this.heap[index], this.heap[maxIndex]] = [
        this.heap[maxIndex],
        this.heap[index],
      ];
      this.shiftDown(maxIndex);
    }
  }

  pop() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const maxElement = this.heap.pop();
    this.shiftDown(0);
    return maxElement;
  }

  top() {
    return this.heap[0];
  }
}

// min heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // to see the length of heap
  size() {
    return this.heap?.length;
  }

  // to see first el heap
  peek() {
    return this.heap[0];
  }

  // to add new el
  add(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap?.length - 1);
  }

  /* 
    it will pop out the most top parent of tree and put the most last child on most top (re-create the tree) with the help of bubble down
  */
  poll() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap?.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  // it will sort in assendtion order every time when add new el but as a tree format not as array
  bubbleUp(index) {
    while (index > 0) {
      // formula for getting the parent from child/index
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        // assign the index for stoping this loop
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      let smallestChildIndex = index;
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }
      if (smallestChildIndex !== index) {
        this.swap(smallestChildIndex, index);
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  // swap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

function addItem(nums, k) {
  const heap = new MinHeap(nums);
  for (const item of nums) {
    heap.add(item);
    if (heap.size() > k) {
      heap.poll();
    }
  }
  return heap.peek();
}

const max = addItem([3, 2, 7, 1, 9, 6], 3);
