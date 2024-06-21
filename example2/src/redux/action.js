// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const ASYNC_ADD = 'ASYNC_ADD';
export const ADD_IF_ODD = 'ADD_IF_ODD';

// Action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (value) => ({ type: ADD, payload: value });

export const asyncAdd = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: ADD, payload: value });
      dispatch({ type: INCREMENT });
    }, 1000);
  };
};

export const addIfOdd = (value) => {
  return (dispatch, getState) => {
    const { count } = getState();
    if (count % 2 !== 0) {
      dispatch({ type: ADD, payload: value });
    }
  };
};
