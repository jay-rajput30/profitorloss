import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [current, setCurrent] = useState(0);
  let [count, setCount] = useState(0);
  let [currenttotal, setCurrentTotal] = useState(0);
  let [original, setOriginal] = useState(0);
  let [result, setResult] = useState();
  let [outcome, setOutcome] = useState("");

  function currentPriceHandler(e) {
    // console.log(e.target.value);
    setCurrent(e.target.value);
    console.log(current);
  }
  function stockCountHandler(e) {
    setCount(e.target.value);
    let currentAmount = e.target.value * current;
    setCurrentTotal(currentAmount);
  }
  function originalPriceHandler(e) {
    setOriginal(e.target.value * count);
  }

  function calculateResult() {
    let percent = 0;
    if (currenttotal >= original && currenttotal > 0 && original > 0) {
      percent = Math.floor((currenttotal / original) * 100);
      setResult(
        `You made a profit of Rs. ${
          currenttotal - original
        } that's ${percent}%...congratulations!`
      );
      setOutcome("profit");
    } else {
      percent = Math.floor((original / currenttotal) * 100);
      setResult(
        `Oh no...you are in a loss of Rs. ${
          original - currenttotal
        } that's ${percent}%`
      );
      setOutcome("loss");
    }
  }
  return (
    <div className="App">
      <header>
        <h1>profit or loss</h1>
      </header>

      <main className={outcome}>
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
              onChange={stockCountHandler}
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
