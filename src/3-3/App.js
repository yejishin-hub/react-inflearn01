// - value를 state로 만들기
// - Increase 버튼 함수 만들기 (+함수형 인자로)
// - Reset 버튼 함수 만들기

import { useState } from "react";

export default function App() {
  // let value = 0;
  // value : state (상태)
  // setValue : 앞의 state (상태) - value값 변경
  // => App 컴포넌트가 value가 바뀐 것을 인지함.
  // useState(0) => 0으로 value 초기화
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          console.log("Increase value1", value);
          // value = value + 1;
          setValue(value + 1);
          console.log("Increase value2", value);
        }}
      >
        Increase value
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset value
      </button>
    </div>
  );
}
