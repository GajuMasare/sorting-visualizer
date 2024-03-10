export const HeapSort = async (
  array,
  setArray,
  handleComparingIndices,
  clearComparingIndices,
  setComparisons,
  SortingSpeed,
  arrayAccesses,
  setIsTimeRunning
) => {
  let speed = 10;
  switch (SortingSpeed) {
    case 1:
      speed = 500;
      break;
    case 2:
      speed = 300;
      break;
    case 3:
      speed = 150;
      break;
    case 4:
      speed = 50;
      break;
    case 5:
      speed = 10;
      break;
  }

  setIsTimeRunning((prev) => !prev);
  const arrayCopy = [...array];

  await buildMaxHeap(
    arrayCopy,
    setArray,
    speed,
    handleComparingIndices,
    arrayAccesses
  );
  let n = arrayCopy.length;

  for (let i = n - 1; i > 0; i--) {
    handleComparingIndices([i, 0]);
    setComparisons((prev) => prev + 1);
    arrayAccesses((prev) => prev + 2);
    await swap(i, 0, arrayCopy, setArray, speed, arrayAccesses);
    await heapify(
      arrayCopy,
      0,
      i,
      setArray,
      speed,
      handleComparingIndices,
      arrayAccesses
    );
  }

  clearComparingIndices();
  setIsTimeRunning((prev) => !prev);
};

const buildMaxHeap = async (
  arrayCopy,
  setArray,
  speed,
  handleComparingIndices,
  arrayAccesses
) => {
  let n = arrayCopy.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(
      arrayCopy,
      i,
      n,
      setArray,
      speed,
      handleComparingIndices,
      arrayAccesses
    );
  }
};

const heapify = async (
  arrayCopy,
  index,
  size,
  setArray,
  speed,
  handleComparingIndices,
  arrayAccesses
) => {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < size && arrayCopy[left] > arrayCopy[largest]) {
    handleComparingIndices([left, largest]);
    arrayAccesses((prev) => prev + 2);
    largest = left;
  }

  if (right < size && arrayCopy[right] > arrayCopy[largest]) {
    handleComparingIndices([right, largest]);
    arrayAccesses((prev) => prev + 2);
    largest = right;
  }

  if (largest !== index) {
    await swap(index, largest, arrayCopy, setArray, speed, arrayAccesses);
    await heapify(
      arrayCopy,
      largest,
      size,
      setArray,
      speed,
      handleComparingIndices,
      arrayAccesses
    );
  }
};

const swap = async (i, j, arrayCopy, setArray, speed, arrayAccesses) => {
  await new Promise((resolve) => setTimeout(resolve, speed));
  arrayAccesses((prev) => prev + 4);

  const temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[j];
  arrayCopy[j] = temp;
  setArray([...arrayCopy]);
};
