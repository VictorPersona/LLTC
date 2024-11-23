import React, { useEffect, useState } from 'react'
import LessonTile from '../components/LessonTile'

const Lessons: React.FC = () => {
  const initialLessons = [
    { unitNo: 1, stars: 2, highscore: 0 },
    { unitNo: 2, stars: 3, highscore: 0 },
    { unitNo: 3, stars: 1, highscore: 0 },
    { unitNo: 4, stars: 0, highscore: 0 },
    { unitNo: 5, stars: 3, highscore: 0 },
    { unitNo: 6, stars: 2, highscore: 0 },
    { unitNo: 7, stars: 2, highscore: 0 },
    { unitNo: 8, stars: 3, highscore: 0 },
    { unitNo: 9, stars: 1, highscore: 0 },
    { unitNo: 10, stars: 1, highscore: 0 },
    { unitNo: 11, stars: 2, highscore: 0 },
    { unitNo: 12, stars: 3, highscore: 0 },
    { unitNo: 13, stars: 1, highscore: 0 },
    { unitNo: 14, stars: 0, highscore: 0 },
    { unitNo: 15, stars: 3, highscore: 0 },
    { unitNo: 16, stars: 2, highscore: 0 },
    { unitNo: 17, stars: 2, highscore: 0 },
    { unitNo: 18, stars: 3, highscore: 0 },
    { unitNo: 19, stars: 1, highscore: 0 },
    { unitNo: 20, stars: 1, highscore: 0 },
    { unitNo: 21, stars: 2, highscore: 0 },
    { unitNo: 22, stars: 3, highscore: 0 },
    { unitNo: 23, stars: 1, highscore: 0 },
    { unitNo: 24, stars: 0, highscore: 0 },
    { unitNo: 25, stars: 3, highscore: 0 },
    { unitNo: 26, stars: 2, highscore: 0 },
    { unitNo: 27, stars: 2, highscore: 0 },
    { unitNo: 28, stars: 3, highscore: 0 },
    { unitNo: 29, stars: 1, highscore: 0 },
    { unitNo: 30, stars: 1, highscore: 0 },
    { unitNo: 31, stars: 2, highscore: 0 },
    { unitNo: 32, stars: 3, highscore: 0 },
    { unitNo: 33, stars: 1, highscore: 0 },
    { unitNo: 34, stars: 0, highscore: 0 },
    { unitNo: 35, stars: 3, highscore: 0 },
    { unitNo: 36, stars: 2, highscore: 0 },
  ]

  const [lessons, setLessons] = useState(initialLessons)

  useEffect(() => {
    const fetchHighScores = () => {
      const storedHighScores = JSON.parse(
        localStorage.getItem('highscores') || '{}'
      )
      const updatedLessons = initialLessons.map((lesson) => ({
        ...lesson,
        highscore: storedHighScores[lesson.unitNo] || lesson.highscore,
      }))
      setLessons(updatedLessons)
    }

    fetchHighScores()
  }, [])

  return (
    <div>
      <h1 className="display-5 mb-4 text-center">Constitutional Lessons</h1>
      <div className="row g-4">
        {lessons.map((lesson) => (
          <div key={lesson.unitNo} className="col-md-4 col-lg-3">
            <LessonTile {...lesson} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lessons
