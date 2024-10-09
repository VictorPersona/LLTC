import React, { useEffect } from "react";
import { useState } from "react";
import LessonTile from "../components/LessonTile";
interface Lesson {
  id: number;
  title: string;
  description: string;
}
const Lessons: React.FC = () => {
  const [lessons, setlessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const fetchLessons = () => {
      setTimeout(() => {
        setlessons([
          {
            id: 1,
            title: "Fundamental Rights",
            description: "Learn about your basic rights",
          },
          {
            id: 2,
            title: "Directive Principles",
            description: "Understand the state policies",
          },
          {
            id: 3,
            title: "Amendments",
            description: "Explore the key amendments",
          },
        ]);
      }, 1000);
    };
    fetchLessons();
  }, []);

  return (
    /*<div>
      <h1>Lessons</h1>
      {lessons.length === 0 ? (
        <p>Loading lessons...</p>
      ) : (
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>*/

    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <LessonTile unitNo={1} stars={2} highscore={226849} />
      <LessonTile unitNo={2} stars={3} highscore={456864} />
      <LessonTile unitNo={3} stars={1} highscore={378459} />
      <LessonTile unitNo={4} stars={0} highscore={357112} />
      <LessonTile unitNo={5} stars={3} highscore={487212} />
      <LessonTile unitNo={6} stars={2} highscore={415678} />
      <LessonTile unitNo={7} stars={2} highscore={499999} />
      <LessonTile unitNo={8} stars={3} highscore={430000} />
      <LessonTile unitNo={9} stars={1} highscore={389000} />
      <LessonTile unitNo={10} stars={1} highscore={468900} />
    </div>
  );
};
export default Lessons;
