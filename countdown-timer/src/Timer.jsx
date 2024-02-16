import React, { useEffect, useRef, useState } from "react";
import { CounterCard } from "./CounterCard";

export const Timer = () => {
  let values = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

  let currentDay = new Date();
  let futureDay = new Date().setDate(currentDay.getDate() + 8);

  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [days, setDays] = useState();

 

  let obj = {
    DAYS: days,
    HOURS: hours,
    MINUTES: minutes,
    SECONDS: seconds,
  };

  useEffect(() => {
    let flag = false;

    let interval = setInterval(() => {
      let now = new Date();

      let diff = Math.ceil(futureDay - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);

    }, 1000);

    return () => clearInterval(interval);
    // return () => {
    //   flag = true;
    // };
  }, []);

  return (
    <div className="w-full flex flex-row justify-around md:justify-evenly items-center ">
      {/* {seconds &&
        values.map((v) => {
          return <CounterCard key={v} name={v} timeValue={obj[v]} />;
        })} */}

      {values.map((v) => {
        return <CounterCard key={v} name={v} timeValue={obj[v]} />;
      })}

      {/* <CounterCard name={"DAYS"} timeValue={days} />;
      <CounterCard  name={"HOURS"} timeValue={hours} />;
      <CounterCard  name={"MINUTES"} timeValue={minutes} />;
      <CounterCard name={"SECONDS"} timeValue={seconds} />; */}
    </div>
  );
};
