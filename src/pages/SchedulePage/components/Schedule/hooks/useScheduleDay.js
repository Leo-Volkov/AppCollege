import { useState, useMemo, useRef } from 'react';


function useScheduleDay(date, scheduleWeek) {
  const scheduleDayRef = useRef(null);
  const [isDayOff, setIsDayOff] = useState(false);
  
  useMemo(() => {
    const today = date.getDay();
    if (1 <= today && today <= 6) {
      scheduleDayRef.current = [...scheduleWeek[today - 1].ScheduleDay];
    } else {
      setIsDayOff(true);
    }
  }, [date, scheduleWeek]);
  
  const scheduleDay =scheduleDayRef.current
  return { scheduleDay, isDayOff };
}

export default useScheduleDay;
