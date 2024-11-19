import React, { useState } from 'react'
import '../styles/QuizComponents.css'

interface FundamentalRight {
  title: string
  description: string
  articles: string[]
}

interface InformationDisplayProps {
  info: FundamentalRight[]
  onInformationEnd: () => void
}

const InformationDisplay: React.FC<InformationDisplayProps> = ({
  info,
  onInformationEnd,
}) => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState<number>(0)

  const handleNext = () => {
    if (currentInfoIndex === info.length - 1) {
      onInformationEnd()
    } else {
      setCurrentInfoIndex(currentInfoIndex + 1)
    }
  }

  const handlePrev = () => {
    setCurrentInfoIndex(currentInfoIndex === 0 ? 0 : currentInfoIndex - 1)
  }

  return (
    <div className="quiz-container info-display">
      <h1 className="info-title">{info[currentInfoIndex].title}</h1>
      <h2 className="info-description">{info[currentInfoIndex].description}</h2>
      <div className="button-container">
        <button
          className="quiz-button btn btn-secondary"
          onClick={handlePrev}
          disabled={currentInfoIndex === 0}
        >
          Previous
        </button>
        <button className="quiz-button btn btn-primary" onClick={handleNext}>
          {currentInfoIndex === info.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default InformationDisplay
