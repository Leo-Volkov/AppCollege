import React from 'react';

import useTime from '../../helpers/Time.js';

import './Time.css';
export default function Time({ date }) {
  return (
    <div className="time">
      {useTime(date)}
    </div>
  );
}
