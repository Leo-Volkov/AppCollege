/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useGroupNumbers } from './hooks/useGroupNumbers.js';
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
  let isDayOff = false;
  const [sortedScheduleDay, setSortedScheduleDay] = useState([]);

  useMemo(async () => {
    try {
      const data = await ScheduleServer.getWeek();
      console.log(data);
      setScheduleWeek(data);
    } catch (err) {
      console.error('Failed to fetch schedule:', err);
      setError(err.message || 'Failed to load schedule');
    }
  }, []);

  const groupNumbers = useGroupNumbers(scheduleWeek.length);
  const { currentLesson, numBreak } = useTimetable();

  if (error) {
    return (
      <div>
        <div>Ошибка: {error}</div>
      </div>
    );
  } else if (!scheduleWeek.length) {
    return <div>Загрузка...</div>;
  } else {
    const { scheduleDay, isDayOff1 } = useScheduleDay(date, scheduleWeek);
    isDayOff = isDayOff1;
    setSortedScheduleDay(useSortScheduleDey(scheduleDay, groupNumbers));
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
