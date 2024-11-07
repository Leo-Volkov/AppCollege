export default function isZeroAddition(getTupeDate) {
  return getTupeDate < 10 ? '0' + getTupeDate : getTupeDate;
}