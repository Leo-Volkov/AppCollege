export default class ScheduleServer {
  static async getWeek() {
    return new Promise((resolve, reject) => {
      try {
        const sse = new EventSource('http://localhost:8080/schedule');

        sse.onopen = () => console.log('>>> Connection opened!');

        sse.addEventListener('schedule', (event) => {
          console.log('>>> Message received: ', event.data);
          const parsedData = JSON.parse(event.data);
          const res = parsedData.ScheduleWeek;
          localStorage.setItem('localScheduleJSON', JSON.stringify(res));
          resolve(res); // Возвращаем данные
          sse.close(); // Закрываем соединение
        });

        sse.onerror = (err) => {
          console.error('Error Server: ', err);
          const cachedData = localStorage.getItem('localScheduleJSON');
          if (cachedData) {
            try {
              const parsedData = JSON.parse(cachedData);
              resolve(parsedData); // Возвращаем кэшированные данные
            } catch (parseErr) {
              reject(new Error('Не удалось разобрать кэшированные данные: ' + parseErr));
            }
          } else {
            reject(new Error('Нет доступных кэшированных данных, и соединение не удалось'));
          }
          sse.close(); // Закрываем соединение
        };
      } catch (error) {
        reject('Глобальная ошибка: ' + error); // Ловим глобальные ошибки
      }
    });
  }
}
