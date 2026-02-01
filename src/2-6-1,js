import ReactDOM from "react-dom";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: "flex" }}>
    {num.map(
      (n) =>
        n !== 1 &&
        n !== 5 && (
          <div style={{ padding: 10, color: n % 2 ? "blue" : "black" }}>
            {num.map((m) => (
              <div>
                {n} X {m} = {n * m}
              </div>
            ))}
          </div>
        )
    )}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
