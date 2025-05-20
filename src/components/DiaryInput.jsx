import { Input, Button } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const DiaryInput = ({ isLoading, onSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    onSubmit(userInput);
  };
  return (
    <>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일들을 간단하게 적어보세요."
      />
      <Button loaading={isLoading} onClick={handleClick}>
        제출
      </Button>
    </>
  );
};

export default DiaryInput;
