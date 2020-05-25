import React from "react";
import { createStore } from "redux";

const App = () => {
  //step 2
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.value;
      case "DECREMENT":
        return state - action.value;
      case "ZERO":
        return (state = 0);
      default:
        return state;
    }
  };

  const increment = (value = 1, index) => {
    return {
      type: "INCREMENT",
      value,
      index,
    };
  };

  const decrement = (value = 1, index) => {
    return {
      type: "DECREMENT",
      value,
      index,
    };
  };

  const emptyValue = (value, index) => {
    return {
      type: "ZERO",
      value,
      index,
    };
  };

  //step 1

  let store = createStore(counter); // counter is the name of our future reducer function

  //step3
  store.subscribe(() => console.log(store.getState()));

  // step4

  store.dispatch(increment(10));
  store.dispatch(increment());
  store.dispatch(emptyValue());
  store.dispatch(decrement(10));
  store.dispatch(increment());

  return <></>;
};

export default App;
