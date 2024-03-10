import React, { useState, useEffect } from "react";
import { bubbleSort } from "./algorithms/BubbleSort";
import "../css/components/sortingVisualizer.css";
import { InsertionSort } from "./algorithms/InsertionSort";
import { SelectionSort } from "./algorithms/SelectionSort";
import { MargeSort } from "./algorithms/MargeSort";
import { QuickSort } from "./algorithms/QuickSort";
import { HeapSort } from "./algorithms/HeapSort";

//this will create randomArray
//length = how many lines; min and max will be the number range
//Array.from({ length }, () => ...); Array.from is a method in JavaScript used to create a new array;The second argument is a mapping function that is applied to each element of the array.
const generateRandomArray = (length, min, max) => {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

const SortingVisualizer = ({
  arraySize,
  sortMethod,
  setComparisons,
  SortingSpeed,
  arrayAccesses,
  setTime,
}) => {
  //createing a random array
  const [array, setArray] = useState(generateRandomArray(arraySize, 10, 99));
  useEffect(() => {
    resetArray(); //reranding as we change the arraysize with the slider
  }, [arraySize]);

  //resetarray function
  const resetArray = () => {
    setArray(generateRandomArray(arraySize, 50, 400));
  };

  //function for the color while sorting
  const [comparingIndices, setComparingIndices] = useState([]);
  const handleComparingIndices = (indices) => {
    setComparingIndices(indices);
    //console.log(indices);
  };

  const clearComparingIndices = () => {
    setComparingIndices([]);
  };

  //timer
  const [timeRunning, setIsTimeRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (timeRunning) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [timeRunning]);

  const MethodData = {
    array,
    setArray,
    handleComparingIndices,
    clearComparingIndices,
    setComparisons,
    SortingSpeed,
    arrayAccesses,
    setIsTimeRunning,
  };

  const StartSort = () => {
    switch (sortMethod) {
      case "Bubble Sort":
        //console.log("bubble sort switch case called");
        bubbleSort(
          array,
          setArray,
          handleComparingIndices,
          clearComparingIndices,
          setComparisons,
          SortingSpeed,
          arrayAccesses,
          setIsTimeRunning
        );
        break;
      case "Insertion Sort":
        //console.log("insertionSort switch case called");
        InsertionSort(
          array,
          setArray,
          handleComparingIndices,
          clearComparingIndices,
          setComparisons,
          SortingSpeed,
          arrayAccesses,
          setIsTimeRunning
        );
        break;
      case "Selection Sort":
        //console.log("selection Sort switch called");
        SelectionSort(
          array,
          setArray,
          handleComparingIndices,
          clearComparingIndices,
          setComparisons,
          SortingSpeed,
          arrayAccesses,
          setIsTimeRunning
        );
        break;
      case "Merge Sort":
        //console.log("Marge Sort switch called");
        MargeSort(
          array,
          setArray,
          handleComparingIndices,
          clearComparingIndices,
          setComparisons,
          SortingSpeed,
          arrayAccesses,
          setIsTimeRunning
        );
        break;
      case "Quick Sort":
        //console.log("Marge Sort switch called");
        QuickSort(
          array,
          setArray,
          handleComparingIndices,
          clearComparingIndices,
          setComparisons,
          SortingSpeed,
          arrayAccesses,
          setIsTimeRunning
        );
        break;
      case "Heap Sort":
        //console.log("Marge Sort switch called");
        HeapSort(
          array,
          setArray,
          handleComparingIndices,
          clearComparingIndices,
          setComparisons,
          SortingSpeed,
          arrayAccesses,
          setIsTimeRunning
        );
        break;
      default:
        //console.log("None switch case called");
        break;
    }
  };
  useEffect(() => {
    StartSort(); //using use effect to call function when clicked on something
  }, [sortMethod]);

  return (
    <div className="sorting-visualizer">
      <div className="arrayContiner">
        {array.map((value, index) => (
          <div
            className={`array-bar ${
              comparingIndices.includes(index) ? "comparing" : ""
            }`}
            key={index}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
