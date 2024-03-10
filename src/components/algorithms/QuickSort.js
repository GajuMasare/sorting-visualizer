export const QuickSort = async (
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

  async function quickSortHelper(start, end) {
    if (start >= end) return;

    let pivotIndex = await partition(start, end);
    await Promise.all([
      quickSortHelper(start, pivotIndex - 1),
      quickSortHelper(pivotIndex + 1, end),
    ]);
  }

  async function partition(start, end) {
    let pivot = arrayCopy[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
      handleComparingIndices([j, end]);
      setComparisons((prev) => prev + 1);
      arrayAccesses((prev) => prev + 2);

      if (arrayCopy[j] < pivot) {
        i++;
        await swap(i, j, arrayCopy, setArray, speed, arrayAccesses);
      }
    }

    await swap(i + 1, end, arrayCopy, setArray, speed, arrayAccesses);
    return i + 1;
  }

  await quickSortHelper(0, arrayCopy.length - 1);

  clearComparingIndices();
  setIsTimeRunning((prev) => !prev);
};

const swap = async (i, j, arrayCopy, setArray, speed, arrayAccesses) => {
  await new Promise((resolve) => setTimeout(resolve, speed));
  arrayAccesses((prev) => prev + 4);

  const temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[j];
  arrayCopy[j] = temp;
  setArray([...arrayCopy]);
};
