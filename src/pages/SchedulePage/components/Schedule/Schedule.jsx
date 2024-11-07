import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import ColGryp from './components/ColGryp/ColGryp';
import CartNumLess from './components/CartNumLess/CartNumLess.jsx';

import './Schedule.css';

import scheduleJSON from '../../../../../schedule.json';

export default function ScheduleApp() {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scheduleDey = useMemo(() => [...scheduleJSON.scheduleDey], []);

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
        {scheduleDey.map((el, index) => {
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
