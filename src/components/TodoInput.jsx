import { useState, useEffect } from "react";

function TodoInput({ onAddTodo }) {
  //input에 들어갈 값이므로 빈 문자열로 시작
  //inputValue 현재상태값
  //setInputValue 나중에 input 바뀔때 사용할 "업데이트함수"
  const [inputValue, setInputValue] = useState("");
  //useEffect는 렌더링 후 실행, inputValue > 바뀔때 마다 실행
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        //state가 input"지배"
        value={inputValue}
        onChange={(event) => {
          //state 업데이트: 컴포넌트 재렌더링
          setInputValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onAddTodo(inputValue);
            setInputValue("");
          }
        }}
      />
      TodoInput
    </div>
  );
}

export default TodoInput;
