import React, { useState } from 'react'
import '../styles/QuizComponents.css'

interface QuestionData {
  question: string
  options: string[]
  correctAnswer: string
  onAnswer: () => void
  score: number
  setScore: () => void
}

const MultipleChoiceQuestion: React.FC<QuestionData> = ({
  question,
  options,
  correctAnswer,
  onAnswer,
  score,
  setScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleOptionSelect = (selected: string) => {
    setSelectedAnswer(selected)
    if (selected === correctAnswer) {
      setIsCorrect(true)
      setScore()
    } else {
      setIsCorrect(false)
    }

    setTimeout(() => {
      setSelectedAnswer(null)
      setIsCorrect(null)
      onAnswer()
    }, 1000)
  }

  return (
    <div className="quiz-container">
      <div className="score-box">Score: {score}</div>
      <p className="question-text">{question}</p>
      <div className="button-container">
        {options.map((option) => (
          <button
            key={option}
            className={`quiz-button option-button ${
              selectedAnswer === option
                ? isCorrect
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleOptionSelect(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MultipleChoiceQuestion
