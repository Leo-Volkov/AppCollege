import { useRef, useEffect } from 'react';

export function useGroupNumbers(scheduleDayLength) {
  const groupNumbersRef = useRef([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newArr = groupNumbersRef.current.map((num) => {
        const nextNum = num + 3;
        return nextNum < scheduleDayLength ? nextNum : null;
      });

      if (newArr[0] === null) {
        newArr = [0, 1, 2];
      }

      groupNumbersRef.current = newArr.filter((num) => num !== null);
    }, 8000);

    return () => clearInterval(interval);
  }, [scheduleDayLength]);

  return groupNumbersRef.current;
}