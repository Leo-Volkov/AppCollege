import './ColGryp.css';
import PropTypes from 'prop-types';

ColGryp.propTypes = {
  scheduleGryp: PropTypes.object,
};

export default function ColGryp({ scheduleGryp }) {
  return (
    <>
      <div className="NameGryp flex_center">
        <h2>{scheduleGryp.group}</h2>
      </div>
      <div className="LessGryp_content">
        {scheduleGryp.subjects.map((el, i) => {
          return (
            <div className="less_cart" key={i}>
              <h3 className="less_Name">{el.subject}</h3>
              <div className="dop_inf">
                <div>
                  <p className="lecturer">{el.teacher}</p>
                </div>
                <div>
                  <p className="cabinet">{el.classroom}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
