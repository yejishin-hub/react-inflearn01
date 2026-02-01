import ReactDOM from "react-dom";

let text = "Hello, world!";
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ["a", "b", "c"];
const imageUrl =
  "https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg";

const element = (
  <div>
    <h1>변수 넣기</h1>
    <ul>
      <li>{text}</li>
      <li>{text + "test"}</li>
    </ul>
    <h1>숫자 및 계산식 넣기</h1>
    <ul>
      <li>{num}</li>
      <li>{num + 15}</li>
    </ul>
    <h1>Boolean, Nullish 값 넣기</h1>
    <ul>
      <li>{true}</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
    </ul>
    <h1>Object, Array 넣기</h1>
    <ul>
      {/* <li>{obj}</li> */}
      <li>{arr}</li>
      <li>{[<div>111</div>, <div>123</div>]}</li>
    </ul>
    <h1>주석 넣기</h1>
    <ul>
      <li>{/* 주석입니다. */}</li>
    </ul>
    <h1>태그 속성에 넣기</h1>
    <ul>
      <li>
        {/* src에 ""(쌍따옴표)를 입력하지 않는다. */}
        <img src={imageUrl} alt="logo" />
      </li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
