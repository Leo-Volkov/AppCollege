import React from 'react';
import './ColGryp.css';

export default function ColGryp({ scheduleGryp }) {
  return (
    <>
      <div className="NameGryp flex_center">
        <p>{scheduleGryp.grup}</p>
      </div>
      <div>
        {scheduleGryp.lesses.map((el, i) => {
          return (
            <div className="less_cart" key={i}>
              <h4>{el.less}</h4>
              <div className="dop_inf">
                <p>{el.lecturer}</p>
                <p>{el.cabinet}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
