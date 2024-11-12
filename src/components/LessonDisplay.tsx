import React, { useState } from 'react'
import InformationDisplay from './InformationDisplay'
import fundamentalRightsData from '../assets/fundamentalRights.json'

import Questions from '../assets/questions.json'
import QuestionDisplay from './QuestionDisplay'
import { quizQuestionData } from './types'

const LessonDisplay: React.FC = () => {
  const [informationEnded, setInformationEnded] = useState<boolean>(false)
  const [questionEnded, setQuestionEnded] = useState<boolean>(false)
  const onInformationEnd = () => {
    setInformationEnded(true)
  }
  const [lessonScore, setLessonScore] = useState<number>(0)

  const updateScore = () => {
    setLessonScore(lessonScore + 100)
  }

  const onQuestionEnd = (value: boolean) => {
    setQuestionEnded(value)
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

      {questionEnded && <p>Quiz Completed , Well Done</p>}
    </>
  )
}
export default LessonDisplay
