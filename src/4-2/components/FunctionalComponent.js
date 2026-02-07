import { useEffect, useState } from "react";

function FunctionalComponent() {
  console.log("[Function] Beginning"); // [1]
  const [value, setValue] = useState(0);

  // Increase value 버튼을 누르면 state가 바뀜
  // 두번째 파라미터로 value 지정이 안 되어 있어 실행 X
  useEffect(() => {
    console.log("[Function] useEffect []"); // [3] : JSX DOM 생성 후에 실행

    // Un-mount
    return () => {
      console.log("[Function] useEffect return []");
    };
  }, []);

  // Increase value 버튼을 누르면 state가 바뀌니까 아래 실행 O
  useEffect(() => {
    console.log("[Function] useEffect [value]"); // [4]

    // Un-mount
    return () => {
      console.log("[Function] useEffect return [value]");
    };
  }, [value]);

  console.log("[Function] End"); // [2]

  return (
    <div>
      <h1>FunctionComponent</h1>
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          setValue((state) => state + 1);
        }}
      >
        Increase value
      </button>
    </div>
  );
}

export default FunctionalComponent;
