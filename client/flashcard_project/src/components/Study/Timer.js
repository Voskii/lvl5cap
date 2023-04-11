import React, { useState, useRef } from 'react';


function Timer() {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(timerTime);
    intervalRef.current = setInterval(() => {
      setTimerTime(prevTime => prevTime - 10);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setTimerOn(false);
  };

  const resetTimer = () => {
    if (!timerOn) {
      setTimerTime(timerStart);
    }
  };

  const adjustTimer = input => {
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        setTimerTime(timerTime + 3600000);
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        setTimerTime(timerTime - 3600000);
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        setTimerTime(timerTime + 60000);
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        setTimerTime(timerTime - 60000);
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        setTimerTime(timerTime + 1000);
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        setTimerTime(timerTime - 1000);
      }
    }
  };

  let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

  return (
    <div className='timer'>
      <div className='timer-header'>Count Down</div>
      <div className='timer-time'>
        {hours} : {minutes} : {seconds}
      </div>
      <div className="timer-label">Hours : Minutes : Seconds</div>
<div className="=timer-display">
  <button onClick={() => adjustTimer("incHours")}>&#8679;</button>
  <button onClick={() => adjustTimer("incMinutes")}>&#8679;</button>
  <button onClick={() => adjustTimer("incSeconds")}>&#8679;</button>
  <button onClick={() => adjustTimer("decHours")}>&#8681;</button>
  <button onClick={() => adjustTimer("decMinutes")}>&#8681;</button>
  <button onClick={() => adjustTimer("decSeconds")}>&#8681;</button>
</div>
      <div className='start'>
        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button onClick={startTimer}>Start</button>
        )}
      </div>
      <div className='stop'>
        {timerOn === true && timerTime >= 1000 && (
          <button onClick={stopTimer}>Stop</button>
        )}
      </div>
      <div className='resume'>
        {timerOn === false &&
          timerStart !== 0 &&
          timerStart !== timerTime &&
          timerTime !== 0 && (
            <button onClick={startTimer}>Resume</button>
          )}
      </div>
      <div className='reset'>
        {timerOn === false ||
          (timerTime < 1000 && timerStart !== timerTime && timerStart > 0) ? (
          <button onClick={resetTimer}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}

export default Timer;