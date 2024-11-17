function useScheduleDay(date, scheduleWeek) {
  let newScheduleDay = null;
  let newIsDayOff = false;

  const today = date.getDay();
  // const today = 2;
  if (1 <= today && today <= 6) {
    if (scheduleWeek[today - 1] !== undefined) {
      newScheduleDay = scheduleWeek[today - 1].ScheduleDay;
    } else {
      newIsDayOff = true;
      newScheduleDay = [];
    }
  } else {
    newScheduleDay = [];
    newIsDayOff = true;
  }

  return { newScheduleDay, newIsDayOff };
}

export default useScheduleDay;
