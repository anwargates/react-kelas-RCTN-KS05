import React, { Component } from "react";

export default class Halu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  //
  componentDidMount(){
    eventData.addEventListener()
  }

  // dipanggil sebelum menghapus komponen dari DOM. bersih-bersih class bisa dilakukan pada method ini
  componentWillUnmount(){
    eventData.removeEventListener()
  }

  // method dipanggil tepat setelah render dipanggil. bisa digunakan untuk operasi DOM atau request async
  componentDidUpdate(prevProps) {
    if (prevProps.selectedState !== this.props.selectedState) {
      fetch("https://pathToApi.com")
        .then((resp) => resp.json())
        .then((respJson) => {
          this.setState({
            isLoading: false,
            data: respJson,
          });
        })
        .catch((err) => console.log(err));
    }
  }
}
