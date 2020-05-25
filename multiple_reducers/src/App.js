import React from "react";
import { createStore, combineReducers } from "redux";

const App = () => {
  const BUY_PASTAS = "BUY_PASTAS";
  const EAT_PASTAS = "EAT_PASTAS";
  const BUY_RICE = "BUY_RICE";
  const EAT_RICE = "EAT_RICE";

  //step 2

  const initialStatePastas = {
    pastas: 4,
  };

  const initialStateRice = {
    rice: 8,
  };

  const pastasReducer = (state = initialStatePastas, action) => {
    switch (action.type) {
      case BUY_PASTAS:
        return {
          ...state,
          pastas: state.pastas + action.weight,
        };
      case EAT_PASTAS:
        return {
          ...state,
          pastas: state.pastas - action.weight,
        };

      default:
        return state;
    }
  };

  const riceReducer = (state = initialStateRice, action) => {
    switch (action.type) {
      case BUY_RICE:
        return {
          ...state,
          rice: state.rice + action.weight,
        };
      case EAT_RICE:
        return {
          ...state,
          rice: state.rice - action.weight,
        };
      default:
        return state;
    }
  };

  const buyPastas = (weight, index) => {
    return {
      type: BUY_PASTAS,
      weight,
      index,
    };
  };

  const eatPastas = (weight, index) => {
    return {
      type: EAT_PASTAS,
      weight,
      index,
    };
  };

  const buyRice = (weight, index) => {
    return {
      type: BUY_RICE,
      weight,
      index,
    };
  };

  const eatRice = (weight, index) => {
    return {
      type: EAT_RICE,
      weight,
      index,
    };
  };

  //step 1

  const rootReducer = combineReducers({
    pastas: pastasReducer,
    rice: riceReducer,
  });

  let store = createStore(rootReducer); // rootReducer is the name of our future multiple reducer function

  //step3
  store.subscribe(() => console.log(store.getState()));

  // step4

  store.dispatch(eatPastas(3));
  store.dispatch(buyPastas(2));
  store.dispatch(buyRice(2));
  store.dispatch(buyPastas(2));
  store.dispatch(buyRice(1));
  store.dispatch(eatRice(2));
  store.dispatch(eatPastas(1));
  return <></>;
};

export default App;
