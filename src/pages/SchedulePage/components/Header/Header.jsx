import { useState, useEffect } from 'react';
import logoks54 from './assets/logoks542.png';

import Time from './components/Time/Time.jsx';
import InfoDay from './components/InfoDay/InfoDay.jsx';
import './Header.css';

export default function Header() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="header">
      <div className="logo col_1">
        <img src={logoks54} alt="logo" />
        <h1>
          Колледж связи №54 <br />
          <span>имени П.М. Вострухина</span>
        </h1>
      </div>
      <div className="col_2">
        <Time date={date} />
      </div>
      <div className="col_3">
        <InfoDay date={date} />
      </div>
    </div>
  );
}
