import ReactDOM from "react-dom";

const element = (
  <div className="container">
    <button>Hello, world! !</button>
    <input type="text" />
  </div>
);

ReactDOM.render(
  element, // JSX
  document.getElementById("root") // HTML Element
);
