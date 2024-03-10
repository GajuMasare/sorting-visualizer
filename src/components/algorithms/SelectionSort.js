export const SelectionSort = async (
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
  const copyArray = [...array];
  const n = copyArray.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      handleComparingIndices([j, minIndex]);
      setComparisons((prev) => prev + 1);
      // Increment array accesses for the comparison
      arrayAccesses((prev) => prev + 2);
      if (copyArray[j] < copyArray[minIndex]) {
        minIndex = j;
      }
    }
    await swap(i, minIndex, copyArray, setArray, speed, arrayAccesses);
  }

  // Clearing comparing indices after each pass
  clearComparingIndices();
  setIsTimeRunning((prev) => !prev);
};

const swap = async (i, j, copyArray, setArray, speed, arrayAccesses) => {
  await new Promise((resolve) => setTimeout(resolve, speed));
  // Increment array accesses for the swap
  arrayAccesses((prev) => prev + 4);
  const temp = copyArray[i];
  copyArray[i] = copyArray[j];
  copyArray[j] = temp;
  setArray([...copyArray]);
};
