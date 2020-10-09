import React, { useState } from "react";
import "../App.css";

function Calculator() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        value={item}
        key={item}
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="calculator">
      <div>
        <div className="input">{input}</div>
      </div>

      <button
        className="clear_button"
        onClick={() => {
          setInput(input.substr(0, input.length - 1));
        }}
      >
        Clear
      </button>
      <button className="clear_all_button" onClick={() => setInput("")}>
        AC
      </button>

      <div className="button_container">
        <div>{calcBtns}</div>
      </div>
      <div>
        <button
          value="+"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
        >
          +
        </button>
        <button
          value="-"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
        >
          -
        </button>
        <button
          value="*"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
        >
          x
        </button>
        <button
          value="/"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
        >
          /
        </button>
      </div>
      <button
        value="="
        onClick={() => {
          try {
            setInput(String(eval(input)));
          } catch (e) {
            console.log(e);
          }
        }}
      >
        =
      </button>
    </div>
  );
}

export default Calculator;
