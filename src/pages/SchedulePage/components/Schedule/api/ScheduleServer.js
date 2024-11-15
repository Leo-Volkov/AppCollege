export default class ScheduleServer {
  static async getWeek() {
    return new Promise((resolve, reject) => {
      try {
        const sse = new EventSource('http://localhost:8080/schedule');

        sse.onopen = () => console.log('>>> Connection opened!');

        sse.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          const res = parsedData.ScheduleWeek;
          console.log(res);
          localStorage.setItem('localScheduleJSON', JSON.stringify(res));
          resolve(res); // Возвращаем данные
          sse.close(); // Закрываем соединение
        };

        sse.onerror = (err) => {
          console.error('Error Server: ', err);
          sse.close(); // Закрываем соединение
        };
      } catch (error) {
        reject("Глобальная ошибка: " + error); // Ловим глобальные ошибки
      }
    });
  }
}
