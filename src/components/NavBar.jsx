import React, { useState } from "react";
import "../css/components/navbar.css";
import iconDownArrow from "../assets/iconArraowDown.png";

export default function NavBar({ onNewArrayClick, onSortStart }) {
  //new array button
  const handleNewArrayClick = () => {
    onNewArrayClick();
  };

  //sorting method
  const [selectedSortMethod, setSelectedSortMethod] = useState("");
  const handleSelectedSortMethod = (method) => {
    setSelectedSortMethod(method);
  };

  //start sort buttton
  const handleSortStart = () => {
    onSortStart(selectedSortMethod);
  };

  return (
    <>
      <div className="navBar-mainContiner">
        <p id="navBar-title">Sorting Visualizer</p>
        <div className="navbar-settingbarMain">
          <div className="navBar-settingsContiner">
            <div className="navbar-sortMethodDiv">
              <div class="dropdown">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  onChange={handleSelectedSortMethod}
                  id="select-SMDropdown"
                >
                  Sort Method <img src={iconDownArrow} id="decoArrowDown" />
                </button>
                <ul class="dropdown-menu" id="select-dropDownMenu">
                  <li>
                    <a
                      id="select-dropDownMenu-item"
                      class="dropdown-item"
                      onClick={() => handleSelectedSortMethod("Bubble Sort")}
                    >
                      Bubble Sort
                    </a>
                  </li>
                  <li>
                    <a
                      id="select-dropDownMenu-item"
                      class="dropdown-item"
                      onClick={() => handleSelectedSortMethod("Insertion Sort")}
                    >
                      Insertion Sort
                    </a>
                  </li>
                  <li>
                    <a
                      id="select-dropDownMenu-item"
                      class="dropdown-item"
                      selectionSort
                      onClick={() => handleSelectedSortMethod("Selection Sort")}
                    >
                      Selection Sort
                    </a>
                  </li>
                  <li>
                    <a
                      id="select-dropDownMenu-item"
                      class="dropdown-item"
                      onClick={() => handleSelectedSortMethod("Merge Sort")}
                    >
                      Merge Sort
                    </a>
                  </li>
                  <li>
                    <a
                      id="select-dropDownMenu-item"
                      class="dropdown-item"
                      onClick={() => handleSelectedSortMethod("Quick Sort")}
                    >
                      Quick Sort
                    </a>
                  </li>
                  <li>
                    <a
                      id="select-dropDownMenu-itemLast"
                      class="dropdown-item"
                      onClick={() => handleSelectedSortMethod("Heap Sort")}
                    >
                      Heap Sort
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-startbuttonDiv">
              <button id="btn-sortStart" onClick={handleSortStart}>
                Start Sort!
              </button>
            </div>

            <div className="navbar-NewArrayButtonDiv">
              <button id="btn-newArray" onClick={handleNewArrayClick}>
                New Array
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
