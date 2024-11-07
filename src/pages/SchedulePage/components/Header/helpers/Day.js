import isZeroAddition from "./isZeroAddition";

export function dayFormat(date) {
  const day = `${isZeroAddition(date.getDate())}.${isZeroAddition(date.getMonth() + 1)}.${date.getFullYear()}`;
  
  return day;
}

export function dayName(date) {
  const daysOfWeek = [
    "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
  ];

  const currentDay = date.getDay();
  
  const dayName = daysOfWeek[currentDay];

  return dayName;
}