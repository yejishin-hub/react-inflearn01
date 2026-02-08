import { useRef } from "react";

function UncontrolledTextInput() {
  /**
   * ℹ️useRef
   * - 요소의 레퍼런스를 직접 가져올 때 사용
   * - document.querySelector("#input")
   * - inputRef의 값이 바뀌더라도 리랜더링 발생 X
   *   리랜더링은 STATE의 변화에서만 발생
   */
  const inputRef = useRef();

  console.log("[UncontrolledTextInput] render");

  return (
    <>
      <input ref={inputRef} type="text" id="input" />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Get value
      </button>
    </>
  );
}

export default UncontrolledTextInput;
