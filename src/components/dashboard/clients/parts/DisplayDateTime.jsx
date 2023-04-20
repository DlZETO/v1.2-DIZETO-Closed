import React, { useState, useEffect } from "react";

const checkTime = (time) => `0${time}`.slice(-2);

export default function DisplayDateTime() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const updateDate = () => {
    const date = new Date();
    const day = checkTime(date.getDate());
    const month = checkTime(date.getMonth() + 1);
    const year = date.getFullYear();
    setDate(`${day}/${month}/${year}`);
  };

  const updateTime = () => {
    const date = new Date();
    const hours = checkTime(date.getHours());
    const minutes = checkTime(date.getMinutes());
    const seconds = checkTime(date.getSeconds());
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateDate();
      updateTime();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mx-auto hidden md:block">
        <div className="mb-1 flex w-[250px] justify-center">
          <p className="flex items-center text-2xl font-semibold text-red-600">
            <span className="mr-1">{date}</span>-<span className="ml-1">{time}</span>
          </p>
        </div>
        <div className="text-center">
          <strong>Date - Time</strong>
        </div>
      </div>
    </>
  );
}
