import React, { useEffect } from "react";
import { useState } from "react";
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
    <div>
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
    </div>
  );
};
export default Lessons;
