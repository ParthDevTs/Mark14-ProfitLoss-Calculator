import logo from "./logo.svg";
import stockImg from "./stocks.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [stockPrice, setStockPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [currentRate, setCurrentRate] = useState(0);
  const [message, setMessage] = useState("");

  function stockPriceHandler(event) {
    setStockPrice(parseInt(event.target.value));
  }

  function quantityHandler(event) {
    setQuantity(parseInt(event.target.value));
  }

  function currentRateHandler(event) {
    setCurrentRate(parseInt(event.target.value));
  }

  function setOutputMessage() {
    if (stockPrice <= 0 || quantity <= 0 || currentRate <= 0) {
      setMessage(
        "Please check that all fields are correctly filled then check the returns."
      );
    } else {
      let totalPrice = stockPrice * quantity;
      let currentPrice = currentRate * quantity;
      let change = currentPrice - totalPrice;

      let changePercent = (change / totalPrice) * 100;
      if (change > 0) {
        setMessage(
          "Congratulations! The Profit is ₹" +
            change +
            " & Profit% is " +
            changePercent +
            "%"
        );
      } else if (change === 0) {
        setMessage("No change from original value, GoodLuck.");
      } else {
        setMessage(
          "Oops! Unfortunately you're at a loss of ₹" +
            change * -1 +
            " & loss% is " +
            changePercent * -1 +
            "%"
        );
      }

      console.log(totalPrice, currentPrice, stockPrice, quantity, currentPrice);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="main__heading">Profit and Loss Calculator</h1>
      </header>
      <main className="main">
        <div className="input__div">
          <div className="stock__rate input">
            <label htmlFor="stockRate">Enter buying price of stock</label>
            <input
              onChange={stockPriceHandler}
              type="number"
              name="stockRate"
              id="stockRate"
            />
          </div>
          <div className="stock__qty input">
            <label htmlFor="stockqty">Enter quantity</label>
            <input
              onChange={quantityHandler}
              type="number"
              name="stockqty"
              id="stockqty"
            />
          </div>
          <div className="stock__cr_rate input">
            <label htmlFor="stockcr_rate">
              Enter the current rate for stock
            </label>
            <input
              onChange={currentRateHandler}
              type="number"
              name="stockcr_rate"
              id="stockcr_rate"
            />
          </div>
          <button onClick={setOutputMessage} className="tellme">
            Tell Me!
          </button>
        </div>
        <div className="output">
          <div className="stock__img">
            <img className="image" src={stockImg} alt="bar graph" />
          </div>
          <span className="output__message">{message}</span>
        </div>
      </main>
    </div>
  );
}

export default App;
