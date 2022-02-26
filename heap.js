function Heap(compare) {
  this.contents = [];
  this.compare = compare;
  return this;
}

Heap.prototype.enqueue = function (item) {
  this.contents.push(item);
  this.siftUp(this.contents.length - 1);
};

Heap.prototype.get = function (n) {
  return this.contents[n];
};

Heap.prototype.dequeue = function () {
  this.swap(0, this.contents.length - 1);
  const result = this.contents.pop();
  this.siftToBottom(0);
  return result;
};

Heap.prototype.siftUp = function (n) {
  if (n <= 0) {
    return this;
  }
  if (this.contents.length < 2) {
    return this;
  }
  const parentIdx = this.getParent(n);
  if (this.parentIdx < 0) {
    return this;
  }
  if (this.compare(this.get(parentIdx), this.get(n))) {
    return this;
  }
  this.swap(parentIdx, n);
  return this.siftUp(parentIdx);
};

Heap.prototype.siftToBottom = function (n) {
  const leftIdx = this.getLeft(n);
  const rightIdx = this.getRight(n);
  const leftItem = this.get(leftIdx);
  const rightItem = this.get(rightIdx);
  if (leftIdx >= this.contents.length) {
    return this;
  }
  let heapiest;
  if (rightIdx >= this.contents.length) {
    heapiest = leftIdx;
  } else {
    heapiest = this.compare(this.get(leftIdx), this.get(rightIdx))
      ? leftIdx
      : rightIdx;
  }
  if (this.compare(this.get(n), this.get(heapiest))) {
    return this;
  }
  this.swap(n, heapiest);
  return this.siftToBottom(heapiest);
};

Heap.prototype.getParent = (n) => Math.floor((n - 1) / 2);
Heap.prototype.getLeft = (n) => 2 * n + 1;
Heap.prototype.getRight = (n) => 2 * n + 2;

Heap.prototype.swap = function (i, j) {
  [this.contents[i], this.contents[j]] = [this.contents[j], this.contents[i]];
  return this;
};

const maxHeap = new Heap((a, b) => a > b);

maxHeap.enqueue(1);
maxHeap.enqueue(4);
maxHeap.enqueue(5);
maxHeap.enqueue(16);
maxHeap.enqueue(23);
maxHeap.enqueue(10);
maxHeap.enqueue(25);

console.log(maxHeap);

maxHeap.dequeue();

console.log(maxHeap);
maxHeap.dequeue();
console.log(maxHeap);
