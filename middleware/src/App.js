import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const App = () => {
  const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
  const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
  const FETCH_NEWS_FAILED = "FETCH_NEWS_FAILED";

  //step 2

  const initialState = {
    loading: false,
    news: [],
    error: "",
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEWS_REQUEST:
        return {
          ...state,
          loading: false,
        };
      case FETCH_NEWS_SUCCESS:
        return {
          ...state,
          loading: true,
          news: action.news,
        };

      case FETCH_NEWS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const successFetch = (data) => {
    return {
      type: FETCH_NEWS_SUCCESS,
      news: [data],
    };
  };

  const errorFetch = () => {
    return {
      type: FETCH_NEWS_FAILED,
      error: "Une erreur s'est produite, veuillez réessayer ! ",
    };
  };

  const requestFetch = () => {
    return {
      type: FETCH_NEWS_REQUEST,
    };
  };

  const fetchNews = () => {
    return (dispatch) => {
      dispatch(requestFetch());
      fetch(
        "http://newsapi.org/v2/everything?q=reactjs&sortBy=publishedAt&apiKey=0ec4510c7db64c06a38ef9c37c4109e3"
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "error") {
            dispatch(errorFetch(response.message));
          } else {
            dispatch(successFetch(response.articles));
          }
        });
    };
  };

  //step 1

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  // reducer is the name of our future reducer function

  //step3
  store.subscribe(() => console.log(store.getState()));

  // step4

  store.dispatch(fetchNews());

  return <></>;
};

export default App;
