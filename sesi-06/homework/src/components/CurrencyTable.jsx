import React, { useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";
import ExchangeRates from "./ExchangeRates";

function fivePercent(exc) {
  let buy = exc * 0.05 + exc;
  let sell = exc - exc * 0.05;
  let res = {
    buy: buy,
    sell: sell,
  };
  return res;
}

function CurrencyTable() {
  let currencyList = new CurrencyList();
  let currency = new ExchangeRates();
  const API_KEY = "0b60f0b4714045e88e359d451481ce44";
  const TARGET_CURRENCIES = String(currencyList.state.currency);
  // const [selectedCurrency, setSelectedCurrency] = useState(0);
  // const [state, setState] = useState(0);

  console.log(TARGET_CURRENCIES);

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${TARGET_CURRENCIES}`
    )
      .then((res) => res.json())
      .then((data) => {
        // setSelectedCurrency(data.rates);
        Object.keys(data.rates).map((key) =>
          currency.state.push({
            name: key,
            buy: fivePercent(data.rates[key]).buy.toString(),
            exch: data.rates[key],
            sell: fivePercent(data.rates[key]).sell.toString(),
          })
        );
        // console.log(data.rates);
      })
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <>
      {console.log(currency.state)}
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
          {/* {Object.keys(selectedCurrency).map((key, id) => (
              <tr key={id}>
                <td>{key}</td>
                <td>1</td>
                <td>{selectedCurrency[key]}</td>
                <td>1</td>
              </tr>
            ))} */}
          {currency.state.map((val, i) => (
            <>
              {console.log(val)}
              <tr key={i}>
                <td>{val.name}</td>
                <td>{val.buy}</td>
                <td>{val.exch}</td>
                <td>{val.sell}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CurrencyTable;
