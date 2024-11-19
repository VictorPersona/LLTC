import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Lessons from "./pages/Lessons"
import About from "./pages/About"
import Settings from "./pages/Settings"
import LessonDisplay from "./components/LessonDisplay"
import Layout from "./components/Layout"

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/lesson/:id" element={<LessonDisplay/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App