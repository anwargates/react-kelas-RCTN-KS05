import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // update state si the next render will show the fallback UI
    return { hasError: true };
  }

  // sejak react 16, kita bisa menggunakan method ini ketika terjadi kesalahan, kesalahan dengan jenis apapun bisa kita tampilkan dengan lebih baik
  componentDidCatch(error, info) {
    // example "ComponentStack"
    // in ComponentThatThrows (Created by App)
    // in ErrorBoundary (Created by App)
    // in div (Created by App)
    // in App
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // you can render any custom fallback UI
      return <h1>Something went wrong</h1>;
    }
    return <div>ErrorBoundary</div>;
  }
}
