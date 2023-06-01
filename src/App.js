import React, { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const Addition = () => {
    setCounter(counter + 1);
  }

  const Subtraction = () => {
    setCounter(counter - 1);
  }

  const Reset = () => {
    setCounter(counter - counter);
  }

  const Multiply = () => {
    setCounter(counter * 2);
  }

  return (
    
    <div className="container  my-5 bg-secondary">
      <div className="card text-center text-light my-5 bg-dark">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5">{counter}</h2>
            <button onClick={Addition} className="btn btn-success mx-3">Increment</button>
            <button onClick={Multiply} className="btn btn-primary mx-3">Multiply</button>
            <button onClick={Subtraction} className="btn btn-danger mx-3">Decrement</button>
            <button onClick={Reset} className="btn btn-secondary mx-3">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
