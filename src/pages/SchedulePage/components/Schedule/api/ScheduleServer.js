export default class ScheduleServer {
  static async getWeek() {
    return new Promise((resolve, reject) => {
      let timeout;

      try {
        const sse = new EventSource('http://localhost:8080/schedule');

        // Тайм-аут на случай зависания
        timeout = setTimeout(() => {
          reject(new Error('Request timed out'));
          sse.close();
        }, 10000); // 10 секунд

        sse.onopen = () => console.log('>>> Connection opened!');

        sse.onmessage = (event) => {
          try {
            const parsedData = JSON.parse(event.data);
            if (!parsedData || !parsedData.ScheduleWeek) {
              throw new Error('Invalid data format');
            }
            const res = parsedData.ScheduleWeek;
            console.log(res);
            localStorage.setItem('localScheduleJSON', JSON.stringify(res));
            clearTimeout(timeout); // Убираем тайм-аут
            resolve(res); // Возвращаем данные
            sse.close(); // Закрываем соединение
          } catch (err) {
            reject(err);
          }
        };

        sse.onerror = (err) => {
          console.error('Error: ', err);
          clearTimeout(timeout); // Убираем тайм-аут
          const cachedData = localStorage.getItem('localScheduleJSON');
          if (cachedData) {
            try {
              const parsedData = JSON.parse(cachedData);
              if (parsedData && Array.isArray(parsedData)) {
                resolve(parsedData); // Возвращаем кэшированные данные
              } else {
                throw new Error('Cached data is invalid');
              }
            } catch (parseErr) {
              reject(new Error('Failed to parse cached data: ' + parseErr));
            }
          } else {
            reject(new Error('No cached data available and connection failed'));
          }
          sse.close(); // Закрываем соединение
        };
      } catch (error) {
        clearTimeout(timeout); // Убираем тайм-аут
        reject(error); // Ловим глобальные ошибки
      }
    });
  }
}
