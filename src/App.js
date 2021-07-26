import "./styles.css";
import { useState } from "react";
export default function App() {
  const [buy, setBuy] = useState();
  const [sell, setSell] = useState();
  const [quantity, setQuantity] = useState();
  const [result, setResult] = useState();

  function clickHandler() {
    var profit = ((100 * (sell - buy)) / buy).toFixed(2);

    var profitAmt = quantity * (sell - buy);

    var loss = ((100 * (buy - sell)) / buy).toFixed(2);

    var lossAmt = quantity * (buy - sell);

    if (buy > 0 && quantity > 0 && sell > 0) {
      if (profit >= 0) {
        setResult(`your profit is ${profit} % and you earn ₹ ${profitAmt}`);
      } else {
        setResult(`your loss is ${loss} % and you loss ₹ ${lossAmt}`);
      }
    } else {
      alert("Please enter valid input number!");
    }
  }

  return (
    <div className="App">
      <h1>Check your profit/loss in stock market</h1>
      <h2>
        This app will calculate profit/loss and how much have you earn profit!
      </h2>
      <div className="form">
        <label>Buying price</label>
        <input type="Number" onChange={(e) => setBuy(e.target.value)} />
        <label>Quantity</label>
        <input type="Number" onChange={(e) => setQuantity(e.target.value)} />
        <label>Selling price</label>
        <input type="Number" onChange={(e) => setSell(e.target.value)} />
        <button onClick={clickHandler}>Check</button>
        <h1>{result}</h1>
      </div>
      <p>Made with ❤️ by Mahendra😄</p>
    </div>
  );
}
