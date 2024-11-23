/*import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import InformationDisplay from './InformationDisplay'
import fundamentalRightsData from '../assets/fundamentalRights.json'
import Questions from '../assets/questions.json'
import QuestionDisplay from './QuestionDisplay'
import { quizQuestionData } from './types'

const LessonDisplay: React.FC = () => {
  // Get `unitNo` dynamically from the route
  const { id } = useParams<{ id: string }>()
  const unitNo = parseInt(id || '1', 10) // Default to unit 1 if `id` is missing

  const [informationEnded, setInformationEnded] = useState<boolean>(false)
  const [questionEnded, setQuestionEnded] = useState<boolean>(false)
  const [lessonScore, setLessonScore] = useState<number>(0)

  const navigate = useNavigate()

  const onInformationEnd = () => setInformationEnded(true)
  const updateScore = () => setLessonScore((prev) => prev + 100)

  const onQuestionEnd = (value: boolean) => {
    setQuestionEnded(value)
  }

  useEffect(() => {
    if (questionEnded) {
      // Update high score in local storage
      const storedHighScores = JSON.parse(
        localStorage.getItem('highscores') || '{}'
      )
      const currentHighScore = storedHighScores[unitNo] || 0

      if (lessonScore > currentHighScore) {
        storedHighScores[unitNo] = lessonScore
        localStorage.setItem('highscores', JSON.stringify(storedHighScores))
      }
    }
  }, [questionEnded, lessonScore, unitNo])

  const handleGoToLessons = () => {
    navigate('/lessons')
  }

  return (
    <>
      
      {!informationEnded && (
        <InformationDisplay
          info={fundamentalRightsData.fundamentalRights}
          onInformationEnd={onInformationEnd}
        />
      )}

      
      {informationEnded && !questionEnded && (
        <QuestionDisplay
          questionArrayData={Questions.quizQuestions as quizQuestionData[]}
          questionEnded={onQuestionEnd}
          score={lessonScore}
          setScore={updateScore}
        />
      )}

      
      {questionEnded && (
        <>
          <p>Quiz Completed! Well Done! Your Score: {lessonScore}</p>
          <p>Go to Lessons</p>
          <button
            className="option-button quiz-button"
            style={{ width: '200px' }}
            onClick={handleGoToLessons}
          >
            Lessons
          </button>
        </>
      )}
    </>
  )
}

export default LessonDisplay
*/

import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import InformationDisplay from './InformationDisplay'
import QuestionDisplay from './QuestionDisplay'

const LessonDisplay: React.FC = () => {
  const { id } = useParams<{ id: string }>() // unit number from route
  const unitNo = parseInt(id || '0', 10)
  const [unitData, setUnitData] = useState<any>(null)
  const [informationEnded, setInformationEnded] = useState(false)
  const [questionEnded, setQuestionEnded] = useState(false)
  const [lessonScore, setLessonScore] = useState(0)

  useEffect(() => {
    const fetchUnitData = async () => {
      try {
        const data = await import(`../assets/data/unit_${unitNo}.json`)
        setUnitData(data)
      } catch (error) {
        console.error(`Error loading data for unit ${unitNo}:`, error)
      }
    }

    fetchUnitData()
  }, [unitNo])

  if (!unitData) {
    return <p>Loading...</p>
  }

  const onInformationEnd = () => setInformationEnded(true)
  const updateScore = () => setLessonScore((prev) => prev + 100)
  const onQuestionEnd = (value: boolean) => {
    setQuestionEnded(value)

    // Save high score in local storage
    const storedHighScores = JSON.parse(
      localStorage.getItem('highscores') || '{}'
    )
    if (lessonScore > (storedHighScores[unitNo] || 0)) {
      storedHighScores[unitNo] = lessonScore
      localStorage.setItem('highscores', JSON.stringify(storedHighScores))
    }
  }

  return (
    <>
      {!informationEnded && (
        <InformationDisplay
          info={unitData.information}
          onInformationEnd={onInformationEnd}
        />
      )}

      {informationEnded && !questionEnded && (
        <QuestionDisplay
          questionArrayData={unitData.quizQuestions}
          questionEnded={onQuestionEnd}
          score={lessonScore}
          setScore={updateScore}
        />
      )}

      {questionEnded && (
        <>
          <p>Quiz Completed, Well Done! Your Score: {lessonScore}</p>
          <Link to="/lessons" className="btn btn-primary">
            Back to Lessons
          </Link>
        </>
      )}
    </>
  )
}

export default LessonDisplay
