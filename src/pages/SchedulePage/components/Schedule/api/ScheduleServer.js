// import axios from 'axios'

import scheduleJSON from '../../../../../../schedule.json';

export default class ScheduleServer {
  static getWeek() {
    try {
      // // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const response = scheduleJSON.ScheduleWeek;
      return response;

      // let response = [];
      // const sse = new EventSource(
      //   'http://localhost:8080/schedule'
      // );
      
      // sse.onopen = () => console.log('>>> Connection opened!');

      // // Обработка обычных сообщений
      // sse.onmessage = (event) => {
      //   const res = JSON.parse(event.data).ScheduleWeek;
      //   console.log(res);

      //   console.log('Message from server:', event.data);
      //   // localStorage.setItem("localScheduleJSON", `${res}`)
      //   response = res;
      // };

      // // Обработка ошибок
      // sse.onerror = (err) => {
      //   console.log('Error: ' + err);
      //   // response = JSON.parse(localStorage.getItem("localScheduleJSON"))
      // };
      // return response;
    } catch (error) {
      console.log('Error:  ' + error);
    }
  }

  // static fun() {
  //   let response = [];
  //   const sse = new EventSource(
  //     'http://localhost:8080/schedule?uthorization=GyhJs5keWete78zZr6opfta1Q7kyLDTJcuFoUDTHFEjuOcHFoZQanwaO0w0mjUmvezJ0shEh8rllOukKyXPnIBLIw3x9cpt1gccV2bGr0KUTljzDtBSMnOeFL6IRskwT',
  //     { withCredentials: true },
  //   );

  //   // Обработка обычных сообщений
  //   sse.onmessage = (event) => {
  //     const res = JSON.parse(event.data).ScheduleWeek;
  //     console.log(res);

  //     console.log('Message from server:', event.data);
  //     // localStorage.setItem("localScheduleJSON", `${res}`)
  //     response = res;
  //   };
  //   sse.onopen = () => console.log('>>> Connection opened!');

  //   // Обработка ошибок
  //   sse.onerror = (err) => {
  //     console.log('Error: ' + err);
  //     // response = JSON.parse(localStorage.getItem("localScheduleJSON"))
  //   };
  //   return response;
  // }
}
