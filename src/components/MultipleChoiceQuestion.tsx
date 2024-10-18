import React, { useState } from "react";


interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: () => void;
}

const MultipleChoiceQuestion: React.FC<QuestionData> = ({
  question,
  options,
  correctAnswer,
  onAnswer,
}) => {

const [selectedAnswer,setSelectedAnswer]=useState<string|null>(null)
const [isCorrect,setIsCorrect]=useState<boolean|null>(null)

const handleOptionSelect=(selected:string)=>{
  setSelectedAnswer(selected);
  if(selected==correctAnswer){
    setIsCorrect(true)
   
  }
  else()

   onAnswer();

    setTimeout({},5000)
}




  return (
    <>
      <p className="questionText">{question}</p>
      {options.map((option) => {
        const isSelected=selectedAnswer===option;

        const buttonStyle = {
          padding: "10px",
          margin: "5px",
          backgroundColor: isSelected?(isCorrect?"green":"red"):"lightblue",
          color: "black",
          border: "1px solid gray",
          borderRadius: "5px",
        };
        return (
          <button
            key={option}
            onClick={()=>handleOptionSelect(option)}
            style={buttonStyle}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

export default MultipleChoiceQuestion;



