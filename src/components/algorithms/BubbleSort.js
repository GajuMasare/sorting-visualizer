export const bubbleSort = async (
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

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Simulating a comparison for animation
      handleComparingIndices([j, j + 1]);
      // Increment array accesses for the comparison
      arrayAccesses((prev) => prev + 2);
      //simulating a swap for animation
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Increment comparisons
        setComparisons((prev) => prev + 1);
        // Increment array accesses for the swap
        arrayAccesses((prev) => prev + 4);
        await swap(j, j + 1, arrayCopy, setArray, speed);
      }
    }

    // Clearing comparing indices after a pass is complete
    clearComparingIndices();
  }
  setIsTimeRunning((prev) => !prev);
};

const swap = async (i, j, arr, setArray, speed) => {
  await new Promise((resolve) => setTimeout(resolve, speed));

  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  setArray([...arr]);
};
