import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
  const [scheduleWeek, setScheduleWeek] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ScheduleServer.getWeek();
        setScheduleWeek(data);
      } catch (err) {
        console.error('Failed to fetch schedule:', err);
        setError(err.message || 'Failed to load schedule');
      }
    };

    fetchData();
  }, []);
  const { scheduleDay, isDayOff } = useScheduleDay(date, scheduleWeek);
  const groupNumbers = useGroupNumbers(scheduleDay.length);
  const sortedScheduleDay = useSortScheduleDey(scheduleDay, groupNumbers);
  const { currentLesson, numBreak } = useTimetable();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scheduleWeek) {
    return <div>Loading...</div>;
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
