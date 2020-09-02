import React, { useReducer } from "react";

const ACTIONS = { INCREMENT: "increment", DECREMENT: "decrement" };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return (
    <div>
      <h1>Число: {state.count}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
    </div>
  );
}

export default App;
