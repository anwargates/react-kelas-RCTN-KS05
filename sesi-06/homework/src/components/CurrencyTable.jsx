import React, { useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";
import ExchangeRates from "./ExchangeRates";

function CurrencyFinder(data) {
  console.log(data);
  
  Object.keys(data).forEach(function(key, index) {
    key
  });
}

function CurrencyTable() {
  let currencyList = new CurrencyList();
  let currency = new ExchangeRates();
  const API_KEY = "0b60f0b4714045e88e359d451481ce44";
  const TARGET_CURRENCIES = String(currencyList.state.currency);

  console.log(TARGET_CURRENCIES);

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${TARGET_CURRENCIES}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let name: 
        Object.keys(data.rates).forEach((key, index)=>{

        })
        currency.state.push({
          name: Object.keys(data.rates),
          buy: "",
          exc: "",
          sell: "",
        });
        // setCurrency(data)
        // console.log(data.length)
      })
      
      .catch((err) => console.log(err));
  }, [API_KEY]);

  return (
    <>
      {console.log(currency.state)}
      {console.log(currencyList.state)}
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
          <tr>
            <td>FJD</td>
            <td></td>
            <td>{/* {currency.rates.FJD} */}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CurrencyTable;
