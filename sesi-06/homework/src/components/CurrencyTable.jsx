import React, { useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";
import ExchangeRates from "./ExchangeRates";

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
  let currencyList = new CurrencyList();
  let currency = new ExchangeRates();
  const API_KEY = "0b60f0b4714045e88e359d451481ce44";
  const TARGET_CURRENCIES = String(currencyList.state.currency);
  // const [selectedCurrency, setSelectedCurrency] = useState(0);
  const [state, setState] = useState([]);

  console.log(TARGET_CURRENCIES);
  console.log(currencyList.state.currency);

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${TARGET_CURRENCIES}`
    )
      .then((res) => res.json())
      .then((data) => {
        // setSelectedCurrency(data.rates);
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
          // currency.addData(state)
          // console.log(state)
          // return currency.addData(
          //   key,
          //   fivePercent(data.rates[key]).buy.toString(),
          //   data.rates[key],
          //   fivePercent(data.rates[key]).sell.toString()
          // );
          // currency.state.push({
          //   name: key,
          //   buy: fivePercent(data.rates[key]).buy.toString(),
          //   exch: data.rates[key],
          //   sell: fivePercent(data.rates[key]).sell.toString(),
          // });
          // currency.setState((state) => {
          //   state.push({
          //     name: key,
          //     buy: fivePercent(data.rates[key]).buy.toString(),
          //     exch: data.rates[key],
          //     sell: fivePercent(data.rates[key]).sell.toString(),
          //   });
          // });
        });
        // console.log(data.rates);
      })
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <>
      {/* {console.log(state)} */}
      {/* {console.log(currency.state)} */}
      {console.log(state)}
      {/* {console.log(currency.getStateArray())} */}

      {/* {console.log(currency.state)}
      {console.log(currency.state.forEach(val=>val.name))}
      {console.log(Object.keys(currency.state).map(val=>val))} */}
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
          {/* {Object.keys(currency.state).map((key, id) => (
              <tr key={id}>
                {console.log(key)}
                <td>{currency.state[key]}</td>
                <td>{currency.state[key]}</td>
                <td>{currency.state[key]}</td>
                <td>1</td>
              </tr>
            ))} */}
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
