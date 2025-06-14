import "./DigitalClock.css";
import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function fomratTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(number) {
    return `${number < 10 ? "0" : ""}${number}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{fomratTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
