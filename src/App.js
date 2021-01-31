import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [current, setCurrent] = useState(0);
  let [original, setOriginal] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>profit or loss</h1>
      </header>
      <main class="stock-values">
        <div class="input-field">
          <input
            onChange={current}
            type="number"
            class="current-price"
            id="current-price"
          />
          <label for="current-price">enter the current price</label>
        </div>
        <div class="input-field">
          <input type="number" class="count" id="count" />
          <label for="current-price">enter number of stocks</label>
        </div>
        <div class="input-field">
          <input type="number" class="count" id="count" />
          <label for="current-price">enter the original price</label>
        </div>
        <button>calculate</button>
      </main>
      <footer></footer>
    </div>
  );
}
