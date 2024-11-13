import './ColGryp.css';
import PropTypes from 'prop-types';

ColGryp.propTypes = {
  scheduleGryp: PropTypes.object,
  currentLesson: PropTypes.number,
  numBreak: PropTypes.number,
};

export default function ColGryp({ scheduleGryp, currentLesson, numBreak }) {
 
  return (
    <>
      <div className="NameGryp flex_center">
        <h2>{scheduleGryp.group}</h2>
      </div>
      <div className="LessGryp_content">
        {scheduleGryp.subjects.map((el, index) => {
          return (
            <div
              key={index}
              className={`less_cart lesson ${currentLesson ? (index === currentLesson - 1 ? 'active' : '') : ''} ${numBreak === index ? 'break_2' : ''} ${numBreak ? (numBreak - 1 === index ? 'break_1' : '') : ''}`}
            >
              <h3 className="less_Name">{el.subject}</h3>
              <div className="dop_inf">
                <div className="lecturer">
                  <div>
                    <p>{el.teacher}</p>
                  </div>
                </div>
                <div className="cabinet">
                  <p>{el.classroom}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
