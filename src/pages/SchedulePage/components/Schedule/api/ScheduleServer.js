export default class ScheduleServer {
  static async getWeek() {
    return new Promise((resolve, reject) => {
      try {
        const sse = new EventSource('http://localhost:8080/schedule');

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
            resolve(res); // Возвращаем данные
            sse.close(); // Закрываем соединение
          } catch (err) {
            reject(err);
          }
        };

        sse.onerror = (err) => {
          console.error('Error: ', err);
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
        reject(error); // Ловим глобальные ошибки
      }
    });
  }
}
