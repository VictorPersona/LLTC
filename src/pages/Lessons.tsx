import React from 'react'
import LessonTile from '../components/LessonTile'

const Lessons: React.FC = () => {
  const lessons: Array<{
    unitNo: number
    stars: 0 | 1 | 2 | 3
    highscore: number
  }> = [
    { unitNo: 1, stars: 2, highscore: 226849 },
    { unitNo: 2, stars: 3, highscore: 456864 },
    { unitNo: 3, stars: 1, highscore: 378459 },
    { unitNo: 4, stars: 0, highscore: 357112 },
    { unitNo: 5, stars: 3, highscore: 487212 },
    { unitNo: 6, stars: 2, highscore: 415678 },
    { unitNo: 7, stars: 2, highscore: 499999 },
    { unitNo: 8, stars: 3, highscore: 430000 },
    { unitNo: 9, stars: 1, highscore: 389000 },
    { unitNo: 10, stars: 1, highscore: 468900 },
  ]

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
