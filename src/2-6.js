import "./2-6.css";

import ReactDOM from "react-dom";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const noDot = {
  listStyle: "none",
};

const element = (
  <div style={{ display: "flex" }}>
    {num.map((item) => {
      return item !== 4 && item !== 9 ? (
        <ul key={item} style={noDot}>
          <li>
            {num.map((index) => {
              return (
                <p
                  key={`${index}-${item}`}
                  className={item % 2 !== 1 ? "highlight" : ""}
                >
                  {item + 1} x {index} = {(item + 1) * index}
                </p>
              );
            })}
          </li>
        </ul>
      ) : (
        ""
      );
    })}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
