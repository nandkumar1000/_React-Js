import { useEffect, useState } from "react";
let clockheading = () => {
  const [time, setTime] = useState(now Date());
  useEffect{
    () => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => {
        clearInterval(intervalId);
        console.log("cancelled the interval");
      }
    }, []
  };
  let time = new Date();
  return <p className="lead">This is the current time.{time.toLocaleDateString()}-{" "}
    {time.toLocaleTimeString()}
  </p>;
};
export default clockheading;