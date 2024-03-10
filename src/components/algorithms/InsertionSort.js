export const InsertionSort = async (
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
  const n = arrayCopy.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && arrayCopy[j] < arrayCopy[j - 1]) {
      handleComparingIndices([i, j]);
      setComparisons((prev) => prev + 1);
      // Increment array accesses for the comparison
      arrayAccesses((prev) => prev + 2);
      await swap(j, j - 1, arrayCopy, setArray, speed, arrayAccesses);
      j--;
    }

    // Clearing comparing indices after each pass
    clearComparingIndices();
  }
  setIsTimeRunning((prev) => !prev);
};

const swap = async (i, j, arrayCopy, setArray, speed, arrayAccesses) => {
  await new Promise((resolve) => setTimeout(resolve, speed));
  // Increment array accesses for the swap
  arrayAccesses((prev) => prev + 4);
  const temp = arrayCopy[i];
  arrayCopy[i] = arrayCopy[j];
  arrayCopy[j] = temp;
  setArray([...arrayCopy]);
};
