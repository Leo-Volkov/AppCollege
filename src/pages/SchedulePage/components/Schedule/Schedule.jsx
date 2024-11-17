/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import { useState, useMemo, useEffect, useRef } from 'react';
// import { useGroupNumbers } from './hooks/useGroupNumbers.js';
import { useTimetable } from './hooks/useTimetable.js';

import ColGryp from './components/ColGryp/ColGryp';
import CartNumLess from './components/CartNumLess/CartNumLess.jsx';

import './Schedule.css';

import useSortScheduleDey from '../../hook/useSortSchedule.js';
import useScheduleDay from './hooks/useScheduleDay.js';
import ScheduleServer from './api/ScheduleServer.js';

export default function ScheduleApp({ date }) {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [scheduleWeek, setScheduleWeek] = useState([]);
  const [error, setError] = useState(null);
  const [scheduleDay, setScheduleDay] = useState([]);
  const [isDayOff, setIsDayOff] = useState(false);
  const [sortedScheduleDay, setSortedScheduleDay] = useState([]);

  const groupNumbersRef = useRef([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newArr = groupNumbersRef.current.map((num) => {
        const nextNum = num + 3;
        return nextNum < scheduleDay.length ? nextNum : null;
      });

      if (newArr[0] === null) {
        newArr = [0, 1, 2];
      }

      groupNumbersRef.current = newArr.filter((num) => num !== null);
    }, 8000);

    return () => clearInterval(interval);
  }, [scheduleDay.length]);

  useMemo(async () => {
    setScheduleWeek(await ScheduleServer.getWeek());
    console.log("2: " + scheduleWeek);
    const { newScheduleDay, newIsDayOff } = useScheduleDay(date, scheduleWeek);
    setScheduleDay(newScheduleDay);
    setIsDayOff(newIsDayOff);
  }, [scheduleWeek]);

  
  useMemo(() => setSortedScheduleDay(useSortScheduleDey(scheduleDay, groupNumbersRef.current)), [scheduleDay, groupNumbersRef.current]);


  const { currentLesson, numBreak } = useTimetable();

  if (error) {
    return (
      <div>
        <div>Ошибка: {error}</div>
      </div>
    );
  } else if (!scheduleWeek.length) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="Schedule_content">
      <div className="col_NumeLess_content">
        {numArr.map((el, index) => (
          <div key={index}>
            <CartNumLess numLess={el} />
          </div>
        ))}
      </div>
      <div className="col_Gryp_content">
        {!isDayOff ? (
          sortedScheduleDay.map((el) => (
            <motion.section
              key={el.group}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4, scale: 0.8 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <ColGryp scheduleGryp={el} currentLesson={currentLesson} numBreak={numBreak} />
            </motion.section>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';
ScheduleApp.propTypes = {
  date: PropTypes.object.isRequired,
};
