import React, { useEffect, useState } from "react";

function fivePercent(exc) {
  let excNum = parseFloat(exc);
  // console.log(excNum);
  let buy = excNum * 0.05 + excNum;
  let sell = excNum - excNum * 0.05;
  let res = {
    buy: buy,
    sell: sell,
  };
  // console.log(res);
  return res;
}

function CurrencyTable() {
  const API_KEY = "0b60f0b4714045e88e359d451481ce44";
  const TARGET_CURRENCIES = String(["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"]);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${TARGET_CURRENCIES}`
    )
      .then((res) => res.json())
      .then((data) => {
        Object.keys(data.rates).map((key) => {
          setState((prev) => [
            ...prev,
            {
              name: key,
              buy: Number(fivePercent(data.rates[key]).buy).toFixed(4),
              exch: Number(data.rates[key]).toFixed(4),
              sell: Number(fivePercent(data.rates[key]).sell).toFixed(4),
            },
          ]);
        });
        // console.log(data.rates);
      })
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <>
      {console.log(state)}
      {/* {console.log(currency.getStateArray())} */}
      {/* {console.log(currency.state)} */}
      <table className="table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {state.map((val, id) => (
            <tr key={id}>
              {console.log(val, id)}
              <td>{val.name}</td>
              <td>{val.buy}</td>
              <td>{val.exch}</td>
              <td>{val.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CurrencyTable;
