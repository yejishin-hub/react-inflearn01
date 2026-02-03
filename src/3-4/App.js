import React, { Component } from "react";

// 클래스형 컴포넌트
export default class App extends Component {
  state = {
    value: 0,
  };

  // 함수형 컴포넌트
  // const [value1, setValue1] = useState(0);
  // const [value2, setValue2] = useState(0);

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  resetValue() {
    this.setState({ value: 0 });
  }

  render() {
    return (
      <div>
        <h1>value: {this.state.value}</h1>
        <button
          onClick={() => {
            // setState : Component에 정의
            this.setState((state) => ({
              value: state.value + 1,
            }));
          }}
        >
          Increase value
        </button>
        {/* this : onclick 요소를 의미 
        => bind 함수를 이용해야 resetValue 함수를 의미*/}
        <button onClick={this.resetValue.bind(this)}>Reset value</button>
      </div>
    );
  }
}
