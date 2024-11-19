import React from "react"
import { Link } from "react-router-dom"

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="display-4 mb-4 text-primary">Let's Learn The Constitution</h1>
      <p className="lead mb-5">Explore the foundations of our democracy through interactive lessons and quizzes.</p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/lessons" className="btn btn-primary btn-lg">
          Start Learning
        </Link>
        <Link to="/about" className="btn btn-outline-secondary btn-lg">
          About Us
        </Link>
      </div>
      <div className="mt-5">
        <h2 className="h4 mb-3">Featured Topics</h2>
        <div className="row g-4">
          {['Fundamental Rights', 'Directive Principles', 'Constitutional Amendments'].map((topic, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 card-title">{topic}</h3>
                  <p className="card-text">Learn about the key aspects of {topic.toLowerCase()} and their importance in our constitution.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage