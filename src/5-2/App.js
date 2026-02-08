function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log("onClick"); // [3] 뗐을 때
        }}
        onMouseDown={() => {
          console.log("onMouseDown"); // [1] 마우스 버튼이 눌렸을 때
        }}
        onMouseUp={() => {
          console.log("onMouseUp"); // [2] 마우스 버튼을 뗐을 때
        }}
      >
        Button
      </button>
      <div
        className="box"
        onClick={() => {
          console.log("onClick");
        }}
        onMouseEnter={() => {
          console.log("onMouseEnter");
        }}
        onMouseLeave={() => {
          console.log("onMouseLeave");
        }}
        onMouseMove={() => {
          console.log("onMouseMove");
        }}
      ></div>
      <div>
        <input
          type="text"
          onKeyDown={() => {
            console.log("onKeyDown"); // 물리적인 key에 반응
          }}
          onKeyUp={() => {
            console.log("onKeyUp");
          }}
          onKeyPress={() => {
            console.log("onKeyPress"); // 특정 key에 반응
          }}
          onFocus={() => {
            console.log("onFocus");
          }}
          onBlur={() => {
            console.log("onBlur");
          }}
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </div>
  );
}

export default App;
