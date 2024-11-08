import useTime from '../../helpers/Time.js';
import './Time.css';
import PropTypes from 'prop-types';

Time.propTypes = {
  date: PropTypes.object,
};

export default function Time({ date }) {
  return <div className="time">{useTime(date)}</div>;
}
