import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface LessonTileProps {
  unitNo: number
  highscore: number
}

const LessonTile: React.FC<LessonTileProps> = ({ unitNo, highscore }) => {
  const [unitTitle, setUnitTitle] = useState<string>('Loading...')
  const stars = Math.min(Math.floor(highscore / 333), 3)

  // Define colors based on star levels (darkest for 0, lightest for 3 stars)
  const starColors = ['#4B2E2E', '#8B4513', '#CD853F', '#F4A460']
  const backgroundColor = starColors[stars] || '#8B4513'

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await import(`../assets/data/unit_${unitNo}.json`)
        setUnitTitle(response.title)
      } catch (error) {
        console.error(`Error loading data for unit ${unitNo}:`, error)
        setUnitTitle(`Unit ${unitNo}`)
      }
    }

    fetchTitle()
  }, [unitNo])

  return (
    <div className="card h-100 border-0 shadow" style={{ backgroundColor }}>
      <div className="card-body text-center text-white">
        <h2 className="card-title h5 mb-3">{unitTitle}</h2>
        <div className="mb-3">{'★'.repeat(stars) + '☆'.repeat(3 - stars)}</div>
        <Link to={`/lesson/${unitNo}`} className="btn btn-light mb-3">
          Play
        </Link>
        <div className="small">High Score: {highscore.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default LessonTile
