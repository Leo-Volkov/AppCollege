import { useState, useEffect, useRef } from 'react';

export function useTimetable() {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [numBreak, setNumBreak] = useState(null);
  const nowRef = useRef(new Date());
  const timetableRef = useRef([]);

  const setTimetable = (currentDay) => {
    timetableRef.current = currentDay === 6 ? [
      { start_Lesson: 540, end_Lesson: 585 },
      { start_Lesson: 595, end_Lesson: 640 },
      { start_Lesson: 660, end_Lesson: 705 },
      { start_Lesson: 715, end_Lesson: 760 },
      { start_Lesson: 770, end_Lesson: 815 },
      { start_Lesson: 825, end_Lesson: 870 },
      { start_Lesson: 880, end_Lesson: 925 },
      { start_Lesson: 935, end_Lesson: 980 },
      { start_Lesson: 990, end_Lesson: 1035 },
      { start_Lesson: 1045, end_Lesson: 1090 }
    ] : [
      { start_Lesson: 540, end_Lesson: 585 },
      { start_Lesson: 595, end_Lesson: 640 },
      { start_Lesson: 660, end_Lesson: 705 },
      { start_Lesson: 715, end_Lesson: 760 },
      { start_Lesson: 780, end_Lesson: 825 },
      { start_Lesson: 845, end_Lesson: 890 },
      { start_Lesson: 910, end_Lesson: 955 },
      { start_Lesson: 965, end_Lesson: 1010 },
      { start_Lesson: 1020, end_Lesson: 1065 },
      { start_Lesson: 1075, end_Lesson: 1120 },
      { start_Lesson: 1130, end_Lesson: 1175 }
    ];
  };

  useEffect(() => {
    setTimetable(nowRef.current.getDay());

    const checkTime = () => {
      nowRef.current = new Date();
      const currentTime = nowRef.current.getHours() * 60 + nowRef.current.getMinutes();
      // const currentTime = 1000; // Используем для тестирования
      
      timetableRef.current.forEach((lesson, index) => {
        if (currentTime >= lesson.start_Lesson && currentTime <= lesson.end_Lesson) {
          setCurrentLesson(index + 1);
          setNumBreak(null);
        } else if (currentTime > lesson.end_Lesson) {
          setNumBreak(index + 1);
          setCurrentLesson(null);
        }
      });
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { currentLesson, numBreak };
}
