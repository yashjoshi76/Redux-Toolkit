import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import "./styles.css";

export default function App() {
  // const [count, setCount] = useState(1);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // const increaseCount = (count) => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = (count) => {
  //   if (count <= 0) {
  //     return 0;
  //   } else {
  //     setCount(count - 1);
  //   }
  // };
  return (
    <div className="App">
      <div>Count: {count}</div>
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(incrementByAmount(100));
        }}
      >
        Increment by 100
      </button>
    </div>
  );
}
