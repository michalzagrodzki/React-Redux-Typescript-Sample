import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { Dispatchers } from "./store"
import { RootState } from "./store/Reducers"
import './App.css';

function App() {
  const state = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const { AddNumber, ReduceNumber, DefaultNumber } = bindActionCreators(Dispatchers, dispatch);


  return (
    <div className="App">
      <header className="App-header">
        <h1>{state.counter}</h1>
        <button onClick={() => AddNumber(1)}>Add number</button>
        <button onClick={() => ReduceNumber(1)}>Reduce number</button>
        <button onClick={() => DefaultNumber()}>Reset</button>
      </header>
    </div>
  );
}

export default App;
