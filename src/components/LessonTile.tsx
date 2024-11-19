import React from "react"
import { Link } from "react-router-dom"

interface LessonTileProps {
  unitNo: number
  stars: 0 | 1 | 2 | 3
  highscore: number
}

const LessonTile: React.FC<LessonTileProps> = ({ unitNo, stars, highscore }) => {
  const autumnColors = ['#8B4513', '#D2691E', '#CD853F', '#DEB887']
  const backgroundColor = autumnColors[unitNo % autumnColors.length]

  return (
    <div className="card h-100 border-0 shadow" style={{ backgroundColor }}>
      <div className="card-body text-center text-white">
        <h2 className="card-title h5 mb-3">Unit {unitNo}</h2>
        <div className="mb-3">
          {"★".repeat(stars) + "☆".repeat(3 - stars)}
        </div>
        <Link to={`/lesson/${unitNo}`} className="btn btn-light mb-3">
          Play
        </Link>
        <div className="small">High Score: {highscore.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default LessonTile