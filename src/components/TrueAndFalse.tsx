import React, { useState } from 'react'

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
      setIsCorrect(null), onAnswer()
    }, 1000)
  }

  const buttonStyle = (option: boolean) => ({
    padding: '10px',
    margin: '5px',
    backgroundColor:
      selectedOption == option ? (isCorrect ? 'green' : 'red') : 'lightblue',
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
  })

  const scoreStyle = {
    padding: '20px',
    margin: '10px',
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
  }

  return (
    <>
      <div className="score" style={scoreStyle}>
        {score}
      </div>
      <div className="questionBox">
        <p>{question}</p>
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
      </div>
    </>
  )
}

export default TrueAndFalse
