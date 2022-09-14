import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import divStyleExt from "./AppStyle";
import styled from "styled-components";

// internal css menggunakan object variable
const divStyle = {
  backgroundColor: "#eeeeee",
  padding: "30px",
  fontFamily: "Arial",
};

// styled components
const Div = styled.div`
  background-color: #eeeeee;
  padding: 30px;
  font-family: "Arial";
`;

class App extends Component {
  render() {
    return (
      <>
        {/* css inline */}
        <div
          style={{
            backgroundColor: "#eeeeee",
            padding: "30px",
            fontFamily: "Arial",
          }}
        >
          <h1>pemanggilan css inline</h1>
        </div>

        {/* pemanggilan css internal */}
        <div style={divStyle}>
          <h1>pemanggilan css internal</h1>
        </div>

        {/* pemanggilan css dengan external css biasa */}
        <div className="container">
          <h1>pemanggilan css dengan external css module</h1>
        </div>

        {/* pemanggilan css dengan external css module */}
        <div className={styles.container}>
          <h1>pemanggilan css dengan external css module</h1>
        </div>

        {/* pemanggilan css dengan external object variable css */}
        <div style={divStyleExt}>
          <h1>pemanggilan css dengan external object variable css</h1>
        </div>

        {/* pemanggilan styled components */}
        <Div>
          <h1>pemanggilan css dengan external object variable css</h1>
        </Div>
      </>
    );
  }
}

export default App;
