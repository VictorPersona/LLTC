import React, { useState } from "react";
import InformationDisplay from "./InformationDisplay";
import fundamentalRightsData from "../assets/fundamentalRights.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import Questions from "../assets/questions.json"
const LessonDisplay: React.FC = () => {
  const [informationEnded, setInformationEnded] = useState<boolean>(false);
  const [questionIndex,setQuestionIndex]= useState<number>(0);
  const [questionEnded,setQuestionEnded]= useState<boolean>(false)
  const onInformationEnd = () => {
    setInformationEnded(true);
  };


  const handleNextQuestion=()=>{
    if(questionIndex<Questions.quizQuestions.length+1){
    setQuestionIndex(questionIndex+1);}
    else{
      setQuestionEnded(true)
    }
  }

  return (
    <>
      {!informationEnded && 
      
        <InformationDisplay
          info={fundamentalRightsData.fundamentalRights}
          onInformationEnd={onInformationEnd}
        />
      }

      {informationEnded && !questionEnded
      && <MultipleChoiceQuestion 
      question={Questions.quizQuestions[questionIndex].question}
      options={Questions.quizQuestions[questionIndex].options}
      correctAnswer={Questions.quizQuestions[questionIndex].correctAnswer}
      onAnswer={handleNextQuestion}/>
      }
    </>
  );
};
export default LessonDisplay;
