export const MargeSort = async (
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

  const merge = async (arr, l, m, r) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; ++i) {
      L[i] = arr[l + i];
      arrayAccesses((prev) => prev + 1);
    }

    for (let j = 0; j < n2; ++j) {
      R[j] = arr[m + 1 + j];
      arrayAccesses((prev) => prev + 1);
    }

    let i = 0,
      j = 0,
      k = l;

    while (i < n1 && j < n2) {
      handleComparingIndices([l + i, m + 1 + j]);
      setComparisons((prev) => prev + 1);
      if (L[i] <= R[j]) {
        await new Promise((resolve) => setTimeout(resolve, speed));
        arr[k] = L[i];
        i++;
      } else {
        await new Promise((resolve) => setTimeout(resolve, speed));
        arr[k] = R[j];
        j++;
      }
      arrayAccesses((prev) => prev + 1);
      setArray([...arr]);
      k++;
    }

    while (i < n1) {
      await new Promise((resolve) => setTimeout(resolve, speed));
      arr[k] = L[i];
      i++;
      k++;
      arrayAccesses((prev) => prev + 1);
      setArray([...arr]);
    }

    while (j < n2) {
      await new Promise((resolve) => setTimeout(resolve, speed));
      arr[k] = R[j];
      j++;
      k++;
      arrayAccesses((prev) => prev + 1);
      setArray([...arr]);
    }

    clearComparingIndices();
  };

  const mergeSortHelper = async (arr, l, r) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSortHelper(arr, l, m);
      await mergeSortHelper(arr, m + 1, r);
      await merge(arr, l, m, r);
    }
  };

  await mergeSortHelper(array, 0, array.length - 1);
  setIsTimeRunning((prev) => !prev);
};
