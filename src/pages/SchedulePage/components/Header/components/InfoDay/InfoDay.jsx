import { dayFormat, dayName } from '../../helpers/Day.js';
import './InfoDay.css';
import PropTypes from 'prop-types';

InfoDay.propTypes = {
  date: PropTypes.object,
};
export default function InfoDay({ date }) {
  return (
    <div className="Date">
      <p className="weekday">{dayName(date)}</p>
      <p className="day">{dayFormat(date)}</p>
    </div>
  );
}
