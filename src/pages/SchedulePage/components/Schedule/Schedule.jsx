import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import ColGryp from './components/ColGryp/ColGryp';
import CartNumLess from './components/CartNumLess/CartNumLess.jsx';
import useSortScheduleDey from '../../hook/useSortSchedule.js';

import { motion } from 'framer-motion';

import './Schedule.css';

import scheduleJSON from '../../../../../schedule.json';

export default function ScheduleApp() {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scheduleDey = useMemo(() => [...scheduleJSON.scheduleDey], []);
  const [numGrup, setNumGrup] = useState([0, 1, 2]);

  useMemo(() => {
    setInterval(() => {
      setNumGrup((prevNumGrup) => {
        let newArr = prevNumGrup.map((num) => {
          const nextNum = num + 3;
          return nextNum < scheduleDey.length ? nextNum : null;
        });

        // Если только первый элемент стал null, начинаем заново
        if (newArr[0] === null) {
          newArr = [0, 1, 2];
        }

        // Фильтруем значения, чтобы выводить только те, которые не равны null
        let filteredNumGrup = newArr.filter((num) => num !== null);
        return filteredNumGrup;
      });
    }, 7000);
  }, []);

  return (
    <div className="Schedule_content">
      <div className="col_NumeLess_content">
        {numArr.map((el, index) => {
          return (
            <div key={index}>
              <CartNumLess numLess={el} />
            </div>
          );
        })}
      </div>
      <div className="col_Gryp_content">
        {useSortScheduleDey(scheduleDey, numGrup).map((el) => {
          return (
            <motion.section
              key={el.grup}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4, scale: 0.8 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <ColGryp scheduleGryp={el} />
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
