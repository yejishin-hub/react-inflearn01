import ReactDOM from "react-dom";

const arr = [];
const text = "";

const element = (
  <div>
    <h1>삼항연산자</h1>
    <ul>
      <li>{1 + 1 === 2 ? "참입니다." : "거짓입니다."}</li>
    </ul>

    <h1>AND 연산자</h1>
    <ul>
      {/* 앞의 조건이 true인 경우 뒤의 값인 AND 연산자1 이라는 문자열을 리턴, 앞의 연산자 결과가 false 이면 X 
      => AND 연산자를 조건문처럼 사용함 */}
      <li>{1 + 1 === 3 && "AND 연산자1"}</li>
      <li>{!!arr.length && "AND 연산자2"}</li>
    </ul>

    <h1>OR 연산자</h1>
    <ul>
      {/* 앞의 조건이 true인 경우엔 뒤의 조건문 실행 X / false이면 뒤의 조건문 실행 O */}
      <li>{1 + 1 == 2 || "OR 연산자1"}</li>
      <li>{text || "OR 연산자2"}</li>
    </ul>
    {/* IF문 잘 안 쓰임 => 가독성, 유지보수성 떨어짐 */}
    <h1>IF문 (즉시실행함수)</h1>
    <ul>
      <li>
        {(() => {
          if (1 + 1 === 2) return "IF";
          else return "ELSE";
        })()}
      </li>
      <li>
        {(() => {
          const data = "즉시실행함수";

          /* 어떤 연산이든 추가 가능 */
          /* 일반적으로는 이렇게 즉시실행함수가
         미리 위에서 가공하여 전달 */

          return data;
        })()}
      </li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
