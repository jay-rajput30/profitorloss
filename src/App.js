import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [current, setCurrent] = useState();
  let [total, setTotal] = useState();
  let [original, setOriginal] = useState();
  let [result, setResult] = useState();

  function currentPriceHandler(e) {
    // console.log(e.target.value);
    setCurrent(e.target.value);
    console.log(current);
  }
  function stockAmountHandler(e) {
    let amount = e.target.value * current;
    setTotal(amount);
  }
  function originalPriceHandler(e) {
    setOriginal(e.target.value);
  }

  function calculateResult() {
    if (current * total > original) {
      setResult("You made a profit...congratulations!");
    } else {
      setResult("Oh no...you are in a loss!");
    }
  }
  return (
    <div className="App">
      <header>
        <h1>profit or loss</h1>
      </header>

      <main className={current * total > original ? "profit" : "loss"}>
        <div class="stock-values">
          <div class="input-field">
            <input
              onChange={currentPriceHandler}
              type="number"
              class="current-price"
              id="current-price"
            />
            <label for="current-price">enter the current price</label>
          </div>
          <div class="input-field">
            <input
              onChange={stockAmountHandler}
              type="number"
              class="count"
              id="count"
            />
            <label for="current-price">enter number of stocks</label>
          </div>
          <div class="input-field">
            <input
              onChange={originalPriceHandler}
              type="number"
              class="count"
              id="count"
            />
            <label for="current-price">enter the original price</label>
          </div>
          <button onClick={calculateResult}>calculate</button>
        </div>
        <h4>{result}</h4>
      </main>
      <footer></footer>
    </div>
  );
}
