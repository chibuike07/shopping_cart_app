import React, { useState, useEffect } from "react";

const DaysOfWeek = () => {
  const [week_day, setWeekDay] = useState([]);
  const handleWeekDay = () => {
    let day = new Date().getDay();
    switch (day) {
      case 0:
        setWeekDay("sunday");
        break;
      case 1:
        setWeekDay("monday");
        break;
      case 2:
        setWeekDay("tuesday");
        break;
      case 3:
        setWeekDay("wednesday");
        break;
      case 4:
        setWeekDay("thursday");
        break;
      case 5:
        setWeekDay("friday");
        break;
      case 6:
        setWeekDay("saturday");
        break;
      default:
        setWeekDay("you re on the way to the exile");
        break;
    }
  };
  useEffect(() => {
    handleWeekDay();
  }, []);
  return <div>{week_day}</div>;
};
export default DaysOfWeek;
