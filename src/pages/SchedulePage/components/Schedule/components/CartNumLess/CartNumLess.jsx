import './CartNumLess.css';
import PropTypes from 'prop-types';

CartNumLess.propTypes = {
  numLess: PropTypes.number,
};

export default function CartNumLess({ numLess }) {
  return (
    <div className="NumeLess">
      <div className="Nume">{numLess}</div>
    </div>
  );
}
