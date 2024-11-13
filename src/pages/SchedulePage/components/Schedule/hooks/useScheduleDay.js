import { useState, useMemo } from 'react';


function useScheduleDay(date, scheduleWeek) {
  const [scheduleDay, setScheduleDay] = useState([]);
  const [isDayOff, setIsDayOff] = useState(false);

  useMemo(() => {
    const today = date.getDay();
    if (1 <= today && today <= 6) {
      setScheduleDay([...scheduleWeek[today - 1].ScheduleDay]);
    } else {
      setIsDayOff(true);
    }
  }, [date]);

  return { scheduleDay, isDayOff };
}

export default useScheduleDay;
