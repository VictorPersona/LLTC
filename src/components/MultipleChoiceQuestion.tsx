import React, { useState } from 'react'

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
    if (selected == correctAnswer) {
      setIsCorrect(true)
      setScore()
    } else {
      setIsCorrect(false)
    }

    setTimeout(() => {
      setSelectedAnswer(null), setIsCorrect(null), onAnswer()
    }, 1000)
  }

  const scoreStyle = {
    padding: '20px',
    margin: '10px',
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
  }

  return (
    <>
      <div className="scoreBox" style={scoreStyle}>
        {score}
      </div>
      <div className="questionBox">
        <p className="questionText">{question}</p>
        {options.map((option) => {
          const isSelected = selectedAnswer === option

          const buttonStyle = {
            padding: '10px',
            margin: '5px',
            backgroundColor: isSelected
              ? isCorrect
                ? 'green'
                : 'red'
              : 'lightblue',
            color: 'black',
            border: '1px solid gray',
            borderRadius: '5px',
          }
          return (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              style={buttonStyle}
            >
              {option}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default MultipleChoiceQuestion
