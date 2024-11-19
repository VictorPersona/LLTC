import React, { useState } from 'react'
import '../styles/QuizComponents.css'

interface TFQuestionData {
  question: string
  correctAnswer: boolean
  onAnswer: () => void
  score: number
  setScore: () => void
}

const TrueAndFalse: React.FC<TFQuestionData> = ({
  question,
  correctAnswer,
  onAnswer,
  score,
  setScore,
}) => {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleOptionSelect = (option: boolean) => {
    setSelectedOption(option)
    if (option === correctAnswer) {
      setIsCorrect(true)
      setScore()
    } else {
      setIsCorrect(false)
    }

    setTimeout(() => {
      setSelectedOption(null)
      setIsCorrect(null)
      onAnswer()
    }, 1000)
  }

  return (
    <div className="quiz-container">
      <div className="score-box">Score: {score}</div>
      <p className="question-text">{question}</p>
      <div className="button-container">
        <button
          className={`quiz-button option-button ${
            selectedOption === true ? (isCorrect ? 'correct' : 'incorrect') : ''
          }`}
          onClick={() => handleOptionSelect(true)}
          disabled={selectedOption !== null}
        >
          True
        </button>
        <button
          className={`quiz-button option-button ${
            selectedOption === false
              ? isCorrect
                ? 'correct'
                : 'incorrect'
              : ''
          }`}
          onClick={() => handleOptionSelect(false)}
          disabled={selectedOption !== null}
        >
          False
        </button>
      </div>
    </div>
  )
}

export default TrueAndFalse
