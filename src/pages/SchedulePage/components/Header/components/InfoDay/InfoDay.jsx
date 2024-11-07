import React from 'react';

import { dayFormat, dayName } from '../../helpers/Day.js';
import './InfoDay.css';

export default function InfoDay({ date }) {
  return (
    <div className="Date">
      <p className="weekday">{dayName(date)}</p>
      <p className="day">{dayFormat(date)}</p>
    </div>
  );
}
