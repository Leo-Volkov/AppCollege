
export default class ScheduleServer {
  static getWeek() {
    try {
      let response = [];
      const sse = new EventSource('http://localhost:8080/schedule');

      sse.onopen = () => console.log('>>> Connection opened!');

      // Обработка обычных сообщений
      sse.onmessage = (event) => {
        const res = event.data.ScheduleWeek;
        console.log(res);

        localStorage.setItem('localScheduleJSON', `${res}`);
        response = res;
      };

      // Обработка ошибок
      sse.onerror = (err) => {
        console.log('Error: ' + err);
        response = JSON.parse(localStorage.getItem("localScheduleJSON"))
      };
      return response;
    } catch (error) {
      console.log('Error:  ' + error);
    }
  }
}
