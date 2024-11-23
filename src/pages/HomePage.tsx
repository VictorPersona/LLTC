import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="display-4 mb-4 text-primary">
        Let's Learn The Constitution
      </h1>
      <p className="lead mb-5">
        Explore the foundations of our democracy through interactive lessons and
        quizzes.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/lessons" className="btn btn-primary btn-lg">
          Start Learning
        </Link>
        <Link to="/about" className="btn btn-outline-secondary btn-lg">
          About Us
        </Link>
      </div>
    </div>
  )
}

export default HomePage
