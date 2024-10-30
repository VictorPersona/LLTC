import React, { useState } from 'react'
import TrueAndFalse from './TrueAndFalse'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import Questions from '../assets/questions.json'

interface quizQuestionData{
  question:string;
  

}

interface Data{
  questionArrayData:Object[];
  onCompletion:()=>void;
}


const QuestionDisplay: React.FC = () => {
  const allQuestions = Questions.quizQuestions.sort(() => 0.5 - Math.random())
  const [questionIndex, setQuestionIndex] = useState<number>(0)

 const handleNextQuestion = () => {
   if (questionIndex < allQuestions.length - 1) {
     setQuestionIndex(questionIndex + 1)
   } else {
     setQuestionEnded(true)
   }
 }

  return (
    <>
      {allQuestions[questionIndex].type == 'TF' ? (
        <TrueAndFalse
          questionText={allQuestions[questionIndex].questionText || ''}
          correctAnswer={!!allQuestions[questionIndex].correctAnswer}
          onAnswer={handleNextQuestion}
        />
      ) : (
        <MultipleChoiceQuestion
          question={allQuestions[questionIndex].question || ''}
          options={allQuestions[questionIndex].options || []}
          correctAnswer={allQuestions[questionIndex].correctAnswer as string}
          onAnswer={handleNextQuestion}
        />
      )}
    </>
  )
}

export default QuestionDisplay
