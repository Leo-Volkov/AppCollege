function useScheduleDay(date, scheduleWeek) {

  let newScheduleDay = null;
  let newIsDayOff = false;

  const today = date.getDay();
  // const today = 2;
  if (1 <= today && today <= 6) {
    newScheduleDay = scheduleWeek[today - 1].ScheduleDay;
  } else {
    newScheduleDay = [];
    newIsDayOff = true;
  }

  return { newScheduleDay, newIsDayOff };
}

export default useScheduleDay;
