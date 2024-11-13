import { motion } from 'framer-motion';
import { useGroupNumbers } from './hooks/useGroupNumbers.js';
import { useTimetable } from './hooks/useTimetable.js';

import ColGryp from './components/ColGryp/ColGryp';
import CartNumLess from './components/CartNumLess/CartNumLess.jsx';

import './Schedule.css';

import useSortScheduleDey from '../../hook/useSortSchedule.js';
import useScheduleDay from './hooks/useScheduleDay.js';
import ScheduleServer from './api/ScheduleServer.js';

export default function ScheduleApp({ date }) {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scheduleWeek = ScheduleServer.getWeek();
  const { scheduleDay, isDayOff } = useScheduleDay(date, scheduleWeek);
  
  const groupNumbers = useGroupNumbers(scheduleDay.length);
  const sortedScheduleDay = useSortScheduleDey(scheduleDay, groupNumbers);
  
  const { currentLesson, numBreak } = useTimetable();

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
              <ColGryp scheduleGryp={el} currentLesson={currentLesson} numBreak={numBreak} />
            </motion.section>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

// export default function ScheduleApp(props) {
//   const { date } = props;

//   const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const scheduleWeek = ScheduleServer.getWeek();
//   const { scheduleDay, isDayOff } = useScheduleDay(date, scheduleWeek);
//   const groupNumbersRef = useRef([0, 1, 2]);
//   const sortedScheduleDay = useSortScheduleDey(scheduleDay, groupNumbersRef.current);

//   useEffect(() => {
    
//     const interval = setInterval(() => {
//         let newArr = groupNumbersRef.current.map((num) => {
//           const nextNum = num + 3;
//           return nextNum < scheduleDay.length ? nextNum : null;
//         });

//         // Если только первый элемент стал null, начинаем заново
//         if (newArr[0] === null) {
//           newArr = [0, 1, 2];
//         }

//         // Фильтруем значения, чтобы выводить только те, которые не равны null
//         let filteredNumGrup = newArr.filter((num) => num !== null);
//         groupNumbersRef.current = filteredNumGrup;
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [scheduleDay.length]);

//   // //////////////////////////////////////////////////////////////////////////////
//   const [currentLesson, setCurrentLesson] = useState(null);
//   const [numBreak, setNumBreak] = useState(null);

//   const nowRef = useRef(new Date());

//   const timetableRef = useRef([]);

//   function proverca(currentDay) {
//     const newTimetable = currentDay === 6 ? [
//       { start_Lesson: 540, end_Lesson: 585 },
//       { start_Lesson: 595, end_Lesson: 640 },
//       { start_Lesson: 660, end_Lesson: 705 },
//       { start_Lesson: 715, end_Lesson: 760 },
//       { start_Lesson: 770, end_Lesson: 815 },
//       { start_Lesson: 825, end_Lesson: 870 },
//       { start_Lesson: 880, end_Lesson: 925 },
//       { start_Lesson: 935, end_Lesson: 980 },
//       { start_Lesson: 990, end_Lesson: 1035 },
//       { start_Lesson: 1045, end_Lesson: 1090 }
//     ] : [
//       { start_Lesson: 540, end_Lesson: 585 },
//       { start_Lesson: 595, end_Lesson: 640 },
//       { start_Lesson: 660, end_Lesson: 705 },
//       { start_Lesson: 715, end_Lesson: 760 },
//       { start_Lesson: 780, end_Lesson: 825 },
//       { start_Lesson: 845, end_Lesson: 890 },
//       { start_Lesson: 910, end_Lesson: 955 },
//       { start_Lesson: 965, end_Lesson: 1010 },
//       { start_Lesson: 1020, end_Lesson: 1065 },
//       { start_Lesson: 1075, end_Lesson: 1120 },
//       { start_Lesson: 1130, end_Lesson: 1175 }
//     ];
  
//     timetableRef.current = newTimetable;
//   }
  
//   useEffect(() => {
//     proverca(nowRef.current.getDay());
  
//     const checkTime = () => {
//       nowRef.current = (new Date());
//       const currentTime = nowRef.current.getHours() * 60 + nowRef.current.getMinutes();
//       // const currentTime = 660; // Используем для тестирования      
      
//       timetableRef.current.forEach((lesson, index) => {
//         const startTime = lesson.start_Lesson;
//         const endTime = lesson.end_Lesson;
  
//         if (currentTime >= startTime && currentTime <= endTime) {
//           setCurrentLesson(index + 1);
//           setNumBreak(null);
//         } else if (currentTime > endTime) {
//           setNumBreak(index + 1);
//           setCurrentLesson(null);
//         }
//       });
//     };
  
//     checkTime();
//     const interval = setInterval(checkTime, 1000);
  
//     return () => clearInterval(interval);
//   }, []);


//   return (
//     <div className="Schedule_content">
//       <div className="col_NumeLess_content">
//         {numArr.map((el, index) => (
//           <div key={index}>
//             <CartNumLess numLess={el} />
//           </div>
//         ))}
//       </div>
//       <div className="col_Gryp_content">
//         {!isDayOff ? (
//           sortedScheduleDay.map((el) => (
//             <motion.section
//               key={el.group}
//               initial={{ opacity: 0.5, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0.4, scale: 0.8 }}
//               transition={{ duration: 2, ease: 'easeInOut' }}
//             >
//               <ColGryp scheduleGryp={el} currentLesson={currentLesson} numBreak={numBreak} />
//             </motion.section>
//           ))
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// }

import PropTypes from 'prop-types';
ScheduleApp.propTypes = {
  date: PropTypes.object.isRequired,
};
