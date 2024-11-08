import './SchedulePage.css';

import HeaderPage from './components/Header/Header.jsx';
import ScheduleApp from './components/Schedule/Schedule.jsx';
export default function SchedulePage() {
  return (
    <div>
      <header>
        <HeaderPage />
      </header>
      <div className="line"></div>
      <main>
        <ScheduleApp />
      </main>
    </div>
  );
}
