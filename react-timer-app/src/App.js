// import FullTimer from "./components/FullTimer";
// import NavBar from "./components/NavBar";
import FullTimer from "./components/SingleTimer/FullTimer";
import Searchbar from "./components/SearchBar/SearchBar";
import PlayAll from "./components/PlayAllButton/PlayAll";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./index.css";

export default function App() {
  // ************************************************************************ //

  // ********************* //
  // *** STATES *** //
  // ********************* //

  // ************************************************************************ //

  const [timerList, setTimerList] = useState(getStorage());
  const [InputFilter, setInputFilter] = useState("");

  // ************************************************************************ //

  // *********************   //
  // *** STATES MODIFIER *** //
  // *********************   //

  // ************************************************************************ //

  function getStorage() {
    let timerStorage = localStorage.getItem("timerList");
    if (!timerStorage || timerStorage === []) return [];
    return JSON.parse(timerStorage.toString());
  }

  async function createTimer() {
    await Swal.fire({
      title: "Enter timer's name",
      input: "text",
      inputValidator: (value) => {
        if (!value) return "You need to write something!";
      },
    }).then((result) => {
      if (!result.value) return;
      setTimerList((timerList) => [
        ...timerList,
        {
          timeoutSeconds: 0,
          id: `${result.value} ${timerList.length}`,
          expiryTimestamp: 0,
        },
      ]);
    });
  }

  function timeChange(timer, seconds) {
    let newList = [...timerList];
    const timerIndex = newList.findIndex((obj) => {
      return obj.id === timer.id;
    });
    newList[timerIndex].timeoutSeconds = seconds;
    setTimerList(newList);
  }

  function removeTimer(timer) {
    setTimerList((timerList) => timerList.filter((t) => t.id !== timer.id));
  }

  useEffect(() => {
    localStorage.setItem("timerList", JSON.stringify(timerList));
  }, [timerList]);

  // ************************************************************************ //

  // ********************* //
  // *** HTML STRUCTURE *** //
  // ********************* //

  // ************************************************************************ //

  return (
    <div id="main">
      <Searchbar
        createTimer={() => createTimer()}
        changeInputFilter={(event) => setInputFilter(event)}
      />
      {timerList.map((timer) => (
        <FullTimer
          key={timer.id}
          id={timer.id}
          isHidden={
            !timer.id
              .substring(0, timer.id.lastIndexOf(" "))
              .toLocaleLowerCase() // id without index
              .includes(InputFilter.toLocaleLowerCase())
          }
          expiryTimestamp={timer.expiryTimestamp}
          removeTimer={() => removeTimer(timer)}
          updateTimeoutSeconds={(seconds) => timeChange(timer, seconds)}
          
        />
      ))}
      <PlayAll
        timerList={timerList}
      />
    </div>
  );
}
