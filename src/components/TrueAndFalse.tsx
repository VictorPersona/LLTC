import React, { useState } from "react";

interface TFQuestionData {
  questionText: string;
  correctAnswer: boolean;
  onAnswer: () => void;
}

const TrueAndFalse: React.FC<TFQuestionData> = ({
  questionText,
  correctAnswer,
  onAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionSelect = (option: boolean) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null), onAnswer();
    }, 1000);
  };

  const buttonStyle = (option: boolean) => ({
    padding: "10px",
    margin: "5px",
    backgroundColor:
      selectedOption == option ? (isCorrect ? "green" : "red") : "lightblue",
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
  });

  return (
    <>
      <p>{questionText}</p>
      <button
        id="true"
        onClick={() => handleOptionSelect(true)}
        style={buttonStyle(true)}
      >
        True
      </button>
      <button
        id="false"
        onClick={() => handleOptionSelect(false)}
        style={buttonStyle(false)}
      >
        False
      </button>
    </>
  );
};

export default TrueAndFalse;
