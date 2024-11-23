/*import React, { useState } from 'react'
import TrueAndFalse from './TrueAndFalse'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import { quizQuestionData } from './types'

interface Data {
  questionArrayData: quizQuestionData[]
  questionEnded: (value: boolean) => void
  score: number
  setScore: () => void
}

const QuestionDisplay: React.FC<Data> = ({
  questionArrayData,
  questionEnded,
  score,
  setScore,
}) => {
  const [remainingQuestions, setRemainingQuestions] = useState<
    quizQuestionData[]
  >(
    questionArrayData.sort(() => 0.5 - Math.random()) // Shuffle the questions once
  )
  const [currentQuestion, setCurrentQuestion] =
    useState<quizQuestionData | null>(
      remainingQuestions.length > 0 ? remainingQuestions[0] : null
    )

  const handleNextQuestion = () => {
    const updatedQuestions = remainingQuestions.slice(1) // Remove the current question
    setRemainingQuestions(updatedQuestions)
    if (updatedQuestions.length > 0) {
      setCurrentQuestion(updatedQuestions[0]) // Show the next question
    } else {
      questionEnded(true) // End the quiz when no questions are left
    }
  }

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  return (
    <>
      {currentQuestion.type === 'TF' ? (
        <TrueAndFalse
          question={currentQuestion.question || ''}
          correctAnswer={!!currentQuestion.correctAnswer}
          onAnswer={handleNextQuestion}
          score={score}
          setScore={setScore}
        />
      ) : (
        <MultipleChoiceQuestion
          question={currentQuestion.question || ''}
          options={currentQuestion.options || []}
          correctAnswer={currentQuestion.correctAnswer as string}
          onAnswer={handleNextQuestion}
          score={score}
          setScore={setScore}
        />
      )}
    </>
  )
}

export default QuestionDisplay
*/

import React, { useState, useEffect } from 'react'
import TrueAndFalse from './TrueAndFalse'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import { quizQuestionData } from './types'

interface Data {
  questionArrayData: quizQuestionData[]
  questionEnded: (value: boolean) => void
  score: number
  setScore: (scoreUpdater: (prevScore: number) => number) => void
}

const QuestionDisplay: React.FC<Data> = ({
  questionArrayData,
  questionEnded,
  score,
  setScore,
}) => {
  const [remainingQuestions, setRemainingQuestions] = useState<
    quizQuestionData[]
  >(
    questionArrayData.sort(() => 0.5 - Math.random()) // Shuffle the questions once
  )
  const [currentQuestion, setCurrentQuestion] =
    useState<quizQuestionData | null>(
      remainingQuestions.length > 0 ? remainingQuestions[0] : null
    )

  const handleNextQuestion = () => {
    const updatedQuestions = remainingQuestions.slice(1) // Remove the current question
    setRemainingQuestions(updatedQuestions)
    if (updatedQuestions.length > 0) {
      setCurrentQuestion(updatedQuestions[0]) // Show the next question
    } else {
      finalizeQuiz()
    }
  }

  const finalizeQuiz = () => {
    const storedHighScores = JSON.parse(
      localStorage.getItem('highscores') || '{}'
    )
    const currentLesson = 'currentLesson' // Replace with appropriate lesson identifier
    if (score > (storedHighScores[currentLesson] || 0)) {
      storedHighScores[currentLesson] = score
      localStorage.setItem('highscores', JSON.stringify(storedHighScores))
    }
    questionEnded(true) // End the quiz
  }

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  return (
    <>
      {currentQuestion.type === 'TF' ? (
        <TrueAndFalse
          question={currentQuestion.question || ''}
          correctAnswer={!!currentQuestion.correctAnswer}
          onAnswer={handleNextQuestion}
          score={score}
          setScore={setScore}
        />
      ) : (
        <MultipleChoiceQuestion
          question={currentQuestion.question || ''}
          options={currentQuestion.options || []}
          correctAnswer={currentQuestion.correctAnswer as string}
          onAnswer={handleNextQuestion}
          score={score}
          setScore={setScore}
        />
      )}
    </>
  )
}

export default QuestionDisplay
