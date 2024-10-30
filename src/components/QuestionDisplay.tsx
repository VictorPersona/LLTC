import React, { useState } from 'react'
import TrueAndFalse from './TrueAndFalse'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import { quizQuestionData } from './types'

interface Data {
  questionArrayData: quizQuestionData[]
  questionEnded: (value: boolean) => void
}

const QuestionDisplay: React.FC<Data> = ({
  questionArrayData,
  questionEnded,
}) => {
  const allQuestions = questionArrayData.sort(() => 0.5 - Math.random())
  const [questionIndex, setQuestionIndex] = useState<number>(0)

  const handleNextQuestion = () => {
    if (questionIndex < allQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      questionEnded(true)
    }
  }

  return (
    <>
      {allQuestions[questionIndex].type == 'TF' ? (
        <TrueAndFalse
          question={allQuestions[questionIndex].question || ''}
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
