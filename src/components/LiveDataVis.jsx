import React from "react";
import "../css/components/liveDataVis.css";
import liveDataIcon from "../assets/iconLiveData.png";

export default function LiveDataVis({
  sortmethod,
  comparisons,
  arraySize,
  sortingSpeed,
  arrayAccesses,
  time,
}) {
  let speed = 10;
  switch (sortingSpeed) {
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

  // Function to format the elapsed time into minutes, seconds, and milliseconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(3, "0")}`;
  };
  return (
    <>
      <div className="LiveDataVis-mainDiv">
        <div className="LiveDataVis-headerDiv">
          <div>
            <img id="LiveDataVis-icon" src={liveDataIcon} />
          </div>
          <div>
            <p id="liveData-liveDataText">Live Data</p>
          </div>
        </div>
        <div className="LiveDataVis-data">
          <p>
            Sorting Method
            <span className="LiveDataVis-data2"> : {sortmethod}</span>
          </p>
          <p>
            comparisons{" "}
            <span className="LiveDataVis-data2">: {comparisons}</span>
          </p>
          <p>
            Array Access{" "}
            <span className="LiveDataVis-data2"> : {arrayAccesses}</span>
          </p>
          <p>
            Sorting Speed <span className="LiveDataVis-data2">: {speed}ms</span>
          </p>
          <p>
            Array Size <span className="LiveDataVis-data2">: {arraySize}</span>
          </p>
          <p>
            Time{" "}
            <span className="LiveDataVis-data2"> : {formatTime(time)}</span>
          </p>
        </div>
      </div>
    </>
  );
}
