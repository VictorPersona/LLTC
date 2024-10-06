import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*import { Link } from "react-router-dom";*/ //Navigation Bar
import HomePage from "./pages/HomePage";
import Lessons from "./pages/Lessons";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
