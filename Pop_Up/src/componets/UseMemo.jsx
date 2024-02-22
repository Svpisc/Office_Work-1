import React,{useMemo, useState} from "react";

export default function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(counterTwo - 1);
  };
  const isEven = useMemo(() => {
    // console.warn("..........");
    let i = 0;
    while (i < 200000000) i++;
    return counterTwo % 2 === 0;
  }, [counterTwo]);
  return (
    <>
      <div className="main">
        <div className="name">
          <button onClick={IncrementOne}>Counte = {counterOne}</button>
          <span>{isEven ? "Even" : "Odd"}</span>
          <button onClick={IncrementTwo}>Counte = {counterTwo}</button>
        </div>
      </div>
    </>
  );
}
