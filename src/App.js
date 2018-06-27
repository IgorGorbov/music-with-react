// @flow

import React, { Component } from "react";
import "./App.css";

const test = (n: number) => n;

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <p>{test(5)}</p>
      </div>
    );
  }
}

export default App;
