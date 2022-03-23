import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, asyncIncrement} from "./actions";

function App() {
  const counter = useSelector(state => {
    return state.counter
  });
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(asyncIncrement())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information</h3> : ""}
    </div>
  );
}

export default App;
