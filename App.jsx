import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
        </div>
      </div>
    );
  }
}


const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
render() {
  const { isLogginActive } = this.state;
  const current = isLogginActive ? "Register" : "Login";
  return (
    <div className="App">
      <div className="login">
        <div className="container" ref={ref => (this.container = ref)}>
          {isLogginActive && (
            <Login containerRef={ref => (this.current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={ref => (this.current = ref)} />
          )}
        </div>
        <RightSide
          current={current}
          containerRef={ref => (this.rightSide = ref)}
        />
      </div>
    </div>
  );
}