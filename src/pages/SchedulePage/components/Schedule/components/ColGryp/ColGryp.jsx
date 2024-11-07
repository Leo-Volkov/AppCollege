import React from 'react';
import './ColGryp.css';

export default function ColGryp({ scheduleGryp }) {
  return (
    <>
      <div className="NameGryp flex_center">
        <h2>{scheduleGryp.grup}</h2>
      </div>
      <div className="LessGryp_content">
        {scheduleGryp.lesses.map((el, i) => {
          return (
            <div className="less_cart" key={i}>
              <h3 className="less_Name">{el.less}</h3>
              <div className="dop_inf">
                <div>
                  <p className='lecturer'>{el.lecturer}</p>
                </div>
                <div>
                  <p className='cabinet'>{el.cabinet}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
