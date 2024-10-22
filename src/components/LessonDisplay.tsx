import React, { useState } from "react";
import InformationDisplay from "./InformationDisplay";
import fundamentalRightsData from "../assets/fundamentalRights.json";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
//import MCQQuestions from "../assets/MCQquestions.json";
import Questions from "../assets/questions.json";
//import TFQuestions from "../assets/TFQuestion.json"
import TrueAndFalse from "./TrueAndFalse";

const LessonDisplay: React.FC = () => {
  const allQuestions = Questions.quizQuestions.sort(() => 0.5 - Math.random());
  const [informationEnded, setInformationEnded] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questionEnded, setQuestionEnded] = useState<boolean>(false);
  const onInformationEnd = () => {
    setInformationEnded(true);
  };

  const handleNextQuestion = () => {
    if (questionIndex < allQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionEnded(true);
    }
  };

  return (
    <>
      {!informationEnded && (
        <InformationDisplay
          info={fundamentalRightsData.fundamentalRights}
          onInformationEnd={onInformationEnd}
        />
      )}

      {informationEnded &&
        !questionEnded &&
        (allQuestions[questionIndex].type == "TF" ? (
          <TrueAndFalse
            questionText={allQuestions[questionIndex].questionText || ""}
            correctAnswer={!!allQuestions[questionIndex].correctAnswer}
            onAnswer={handleNextQuestion}
          />
        ) : (
          <MultipleChoiceQuestion
            question={allQuestions[questionIndex].question || ""}
            options={allQuestions[questionIndex].options || []}
            correctAnswer={allQuestions[questionIndex].correctAnswer as string}
            onAnswer={handleNextQuestion}
          />
        ))}

      {questionEnded && <p>Quiz Completed , Well Done</p>}
    </>
  );
};
export default LessonDisplay;

/*{informationEnded && !questionEnded && <TrueAndFalse questionText={TFQuestions.Questions[questionIndex].questionText} correctAnswer={TFQuestions.Questions[questionIndex].correctAnswer}onAnswer={handleNextQuestion}/>}
 */
