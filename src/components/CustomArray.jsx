import React, { useState } from "react";
import "../css/components/customArray.css";
import iconArray from "../assets/iconArray.png";

export default function CustomArray({ onSizeChange, onSortingSpeedChange }) {
  const [sizeSliderValue, setSizeSliderValue] = useState(50);

  //array size slider
  const sizeHandleSliderChnage = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSizeSliderValue(newSize);
    onSizeChange(newSize);
  };

  //sorting speed slider
  const [speedSliderValue, setSpeedSliderValue] = useState(5);
  const speedHandleSliderChnage = (event) => {
    const newSpeed = parseInt(event.target.value, 10);
    setSpeedSliderValue(newSpeed);
    onSortingSpeedChange(newSpeed);
  };

  const calculateGradient = (percentage) => {
    return `linear-gradient(to right, #8371F3 0%, #8371F3 ${percentage}%, #C7D3EB ${percentage}%, #C7D3EB 100%)`;
  };

  return (
    <>
      <div className="custom-mainDiv">
        <div className="custom-titleDiv">
          <div>
            <img id="custom-arrayIcon" src={iconArray} />
          </div>
          <div>
            <p>Custom Array</p>
          </div>
        </div>
        <div className="custom-sizeSliderDiv">
          <p id="custom-inputText">Size</p>
          <input
            id="custom-input"
            type="range"
            min="10"
            max="200"
            value={sizeSliderValue}
            onChange={sizeHandleSliderChnage}
            style={{
              background: calculateGradient(
                ((sizeSliderValue - 10) / (200 - 10)) * 100
              ),
            }}
          />
        </div>
        <div className="custom-speedSliderDiv">
          <p>Speed</p>
          <input
            id="custom-input"
            type="range"
            min="1"
            max="5"
            value={speedSliderValue}
            onChange={speedHandleSliderChnage}
            style={{
              background: calculateGradient(
                ((speedSliderValue - 1) / (5 - 1)) * 100
              ),
            }}
          />
        </div>
      </div>
    </>
  );
}
