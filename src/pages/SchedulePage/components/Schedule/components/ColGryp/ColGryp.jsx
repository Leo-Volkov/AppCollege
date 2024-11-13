import { useState, useEffect } from 'react';
import './ColGryp.css';
import PropTypes from 'prop-types';

ColGryp.propTypes = {
  scheduleGryp: PropTypes.object,
};

export default function ColGryp({ scheduleGryp }) {
  const [currentLesson, setCurrentLesson] = useState(2);
  const [numBreak, setNumBreak] = useState(null);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
  //     const currentTime = now.getHours() * 60 + now.getMinutes();

  //     let activeLessonIndex = null;
  //     scheduleGryp.subjects.forEach((lesson, index) => {
  //       const startTime = lesson.startHour * 60 + lesson.startMinute;
  //       const endTime = lesson.endHour * 60 + lesson.endMinute;
        
  //       if (currentTime >= startTime && currentTime <= endTime) {
  //         activeLessonIndex = index;
  //       }
  //     });

  //     setCurrentLesson(activeLessonIndex);
  //     setIsBreak(activeLessonIndex === null);
    };

    checkTime();
    const interval = setInterval(checkTime, 1000); // Update every minute

    return () => clearInterval(interval);
  }, [scheduleGryp.subjects]);

  return (
    <>
      <div className="NameGryp flex_center">
        <h2>{scheduleGryp.group}</h2>
      </div>
      <div className="LessGryp_content">
        {scheduleGryp.subjects.map((el, index) => {
          return (
            <div
              key={index}
              className={`less_cart lesson ${currentLesson ? index === currentLesson - 1 ? 'active' : '' : ''} ${numBreak === index ? 'break_2' : ''} ${numBreak ? (numBreak - 1) === index ? 'break_1' : '' : ''}`}
              >
              <h3 className="less_Name">{el.subject}</h3>
              <div className="dop_inf">
                <div className="lecturer">
                  <div>
                    <p>{el.teacher}</p>
                  </div>
                </div>
                <div className="cabinet">
                  <p>{el.classroom}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
