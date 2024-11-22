import isZeroAddition from "../../helpers/isZeroAddition.js";
import './Time.css';
import PropTypes from 'prop-types';

Time.propTypes = {
  date: PropTypes.object,
};

export default function Time({ date }) {
  return <div className="time"><samp>{isZeroAddition(date.getHours())}</samp><samp style={{margin: '0 0.2rem'}}>:</samp><samp>{isZeroAddition(date.getMinutes())}</samp></div>;
}
