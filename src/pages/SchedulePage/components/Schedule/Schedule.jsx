import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ColGryp from './components/ColGryp/ColGryp';
import CartNumLess from './components/CartNumLess/CartNumLess.jsx';

import './Schedule.css';

import useSortScheduleDey from '../../hook/useSortSchedule.js';

import useScheduleDay from './hooks/useScheduleDay.js';
import ScheduleServer from './api/ScheduleServer.js';

export default function ScheduleApp(props) {
  const { date } = props;

  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const scheduleWeek = ScheduleServer.getWeek();
  const { scheduleDay, isDayOff } = useScheduleDay(date, scheduleWeek);
  const [groupNumbers, setGroupNumbers] = useState([0, 1, 2]);
  const sortedScheduleDay = useSortScheduleDey(scheduleDay, groupNumbers);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGroupNumbers((prevNumGrup) => {
        let newArr = prevNumGrup.map((num) => {
          const nextNum = num + 3;
          return nextNum < scheduleDay.length ? nextNum : null;
        });

        // Если только первый элемент стал null, начинаем заново
        if (newArr[0] === null) {
          newArr = [0, 1, 2];
        }

        // Фильтруем значения, чтобы выводить только те, которые не равны null
        let filteredNumGrup = newArr.filter((num) => num !== null);
        return filteredNumGrup;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="Schedule_content">
      <div className="col_NumeLess_content">
        {numArr.map((el, index) => (
          <div key={index}>
            <CartNumLess numLess={el} />
          </div>
        ))}
      </div>
      <div className="col_Gryp_content">
        {!isDayOff ? (
          sortedScheduleDay.map((el) => (
            <motion.section
              key={el.group}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4, scale: 0.8 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <ColGryp scheduleGryp={el} />
            </motion.section>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';
ScheduleApp.propTypes = {
  date: PropTypes.object.isRequired,
};

// import { useMemo, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// import ColGryp from './components/ColGryp/ColGryp';
// import CartNumLess from './components/CartNumLess/CartNumLess.jsx';

// import './Schedule.css';

// import useSortScheduleDey from '../../hook/useSortSchedule.js';

// export default function ScheduleApp(props) {
//   const { date } = props;
//   const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const [scheduleDeyOff, setScheduleDeyOff] = useState(false);

//   //Нужно автоматизировать, добавить кастомный хук который достаёт определённый день
//   const [scheduleDey, setScheduleDey] = useState([]);

//   useMemo(() => {
//     const today = date.getDay();
//     if (1 <= today && today <= 6) {
//       setScheduleDey([...scheduleJSON.ScheduleWeek[today - 1].ScheduleDay]);
//     } else {
//       setScheduleDeyOff(true);
//     }
//   }, []);

//   const [numGrup, setNumGrup] = useState([0, 1, 2]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNumGrup((prevNumGrup) => {
//         let newArr = prevNumGrup.map((num) => {
//           const nextNum = num + 3;
//           return nextNum < scheduleDey.length ? nextNum : null;
//         });

//         // Если только первый элемент стал null, начинаем заново
//         if (newArr[0] === null) {
//           newArr = [0, 1, 2];
//         }

//         // Фильтруем значения, чтобы выводить только те, которые не равны null
//         let filteredNumGrup = newArr.filter((num) => num !== null);
//         return filteredNumGrup;
//       });
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   const sortedScheduleDey = useSortScheduleDey(scheduleDey, numGrup);
//   return (
//     <div className="Schedule_content">
//       <div className="col_NumeLess_content">
//         {numArr.map((el, index) => {
//           return (
//             <div key={index}>
//               <CartNumLess numLess={el} />
//             </div>
//           );
//         })}
//       </div>
//       <div className="col_Gryp_content">
//         {!scheduleDeyOff ? (
//           sortedScheduleDey.map((el) => {
//             return (
//               <motion.section
//                 key={el.group}
//                 initial={{ opacity: 0.5, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0.4, scale: 0.8 }}
//                 transition={{ duration: 2, ease: 'easeInOut' }}
//               >
//                 <ColGryp scheduleGryp={el} />
//               </motion.section>
//             );
//           })
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// }

// import PropTypes from 'prop-types';
// ScheduleApp.propTypes = {
//   date: PropTypes.object.isRequired,
// };
