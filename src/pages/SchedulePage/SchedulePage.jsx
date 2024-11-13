import './SchedulePage.css';
import { useState, useEffect } from 'react';

import Header from './components/Header/Header.jsx';
import ScheduleApp from './components/Schedule/Schedule.jsx';
export default function SchedulePage() {

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);  

  return (
    <div>
      <header>
        <Header date={date}/>
      </header>
      <div className="line"></div>
      <main>
        <ScheduleApp date={date} />
      </main>
    </div>
  );
}
