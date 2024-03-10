import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SortingVisualizer from "./components/SortingVisualizer";
import LiveDataVis from "./components/LiveDataVis";
import CustomArray from "./components/CustomArray";
import DecobgCircle from "./assets/bglight.png";
import "./css/app.css";

function App() {
  //parent def
  const [arraySize, setArraySize] = useState(75);
  const [newArrayTrigger, setNewArrayTrigger] = useState(false);
  const [selectedSortMethod, setSelectedSortMethod] = useState("NaN");
  const [comparisons, setComparisons] = useState(0);
  const [sortingSpeed, setSortingSpeed] = useState(5);
  const [arrayAccesses, setArrayAccesses] = useState(0);
  const [time, setTime] = useState(0);
  const [speedSliderValue, setSpeedSliderValue] = useState(5);

  //parent arraysize change bassed on slider in navbar
  const handleSizeChange = (newSize) => {
    setArraySize(newSize);
  };

  //parent newarray button in navbar
  const handleNewArrayClick = () => {
    setNewArrayTrigger((prev) => !prev);
    setSelectedSortMethod("NaN");
    setComparisons(0);
    setSortingSpeed(5);
    setArrayAccesses(0);
    setTime(0);
    setSpeedSliderValue(5);
  };

  //parent for start sort button in nav bar
  const handleSortStart = (sortMethod) => {
    setSelectedSortMethod(sortMethod);
    //console.log("selected sort method:", sortMethod);
  };

  //parent for sorting speed
  const handleSortingSpeed = (speedSliderValue) => {
    setSortingSpeed(speedSliderValue);
    //console.log("sorting Speed:", speedSliderValue);
  };

  return (
    <>
      <div className="ap-decoBgCpircle" />
      <div className="appMainDiv">
        <NavBar
          onNewArrayClick={handleNewArrayClick}
          onSortStart={handleSortStart}
        />
        <div className="secondDiv">
          <div className="secondDivOne">
            <CustomArray
              onSizeChange={handleSizeChange}
              onSortingSpeedChange={handleSortingSpeed}
              setSpeedSliderValue={setSpeedSliderValue}
            />

            <LiveDataVis
              sortmethod={selectedSortMethod}
              comparisons={comparisons}
              arraySize={arraySize}
              sortingSpeed={sortingSpeed}
              arrayAccesses={arrayAccesses}
              time={time}
            />
          </div>

          <div className="secondDivTwo">
            <SortingVisualizer
              key={newArrayTrigger}
              arraySize={arraySize}
              sortMethod={selectedSortMethod}
              setComparisons={setComparisons}
              SortingSpeed={sortingSpeed}
              arrayAccesses={setArrayAccesses}
              setTime={setTime}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
