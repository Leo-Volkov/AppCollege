import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import ColGryp from './components/ColGryp/ColGryp';
import CartNumLess from './components/CartNumLess/CartNumLess.jsx';
import useSortScheduleDey from '../../hook/useSortSchedule.js';


import './Schedule.css';

import scheduleJSON from '../../../../../schedule.json';

export default function ScheduleApp() {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scheduleDey = useMemo(() => [...scheduleJSON.scheduleDey], []);
  const [numGrup, setNumGrup] = useState([0, 1, 2]);
  
  useEffect(() => {
    const interval = setInterval(() => {
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
        let filteredNumGrup = newArr.filter((num) => num !== null)
        return filteredNumGrup;
      });
    }, 7000);
  
    return () => clearInterval(interval);
  }, [scheduleDey.length]);


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
        {useSortScheduleDey(scheduleDey, numGrup).map((el, index) => {
          return (
            <section key={index}>
              <ColGryp scheduleGryp={el} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
