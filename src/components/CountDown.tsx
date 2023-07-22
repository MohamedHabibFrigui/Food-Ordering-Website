"use client";

import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  return (
    <Countdown
      date={endingDate}
      className="font-bold text-5xl text-yellow-300"
    />
  );
};

export default CountDown;
