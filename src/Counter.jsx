import { useState, useEffect } from "react";

function Counter() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    console.log("EventListenerAdded");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EventListenerRemoved");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </>
  );
}

export default Counter;
