import isZeroAddition from "./isZeroAddition.js";

export default function taimeFormat(date) {  
  const time = `${isZeroAddition(date.getHours())}:${isZeroAddition(date.getMinutes())}:${isZeroAddition(date.getSeconds())}`;
  return time;
  
}
