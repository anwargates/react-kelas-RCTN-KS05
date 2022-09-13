import { Component } from "react";

export default class CurrencyTable extends Component {
  constructor() {
    super();
    this.state = {
      api_key: "0b60f0b4714045e88e359d451481ce44",
      target_currencies: ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"],
      data: [],
    };
  }

  fivePercent(exc) {
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

  componentDidMount() {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=${this.state.api_key}&symbols=${String(this.state.target_currencies)}`
    )
      .then((res) => res.json())
      .then((data) => {
        const arr = [];
        Object.keys(data.rates).map((key) => {
          arr.push({
            name: key,
            buy: Number(this.fivePercent(data.rates[key]).buy).toFixed(4),
            exch: Number(data.rates[key]).toFixed(4),
            sell: Number(this.fivePercent(data.rates[key]).sell).toFixed(4),
          });
        });
        this.setState({ data: arr });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        {console.log(this.state)}
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
            {this.state.data.map((val, id) => (
              <tr key={id}>
                {/* {console.log(val, id)} */}
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
}
