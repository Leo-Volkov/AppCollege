export default class ScheduleServer {
  static async getWeek() {
    return new Promise((resolve, reject) => {
      try {
        const sse = new EventSource('http://localhost:8080/schedule');

        sse.onopen = () => console.log('>>> Connection opened!');

        sse.onmessage = (event) => {
          try {
            const res = JSON.parse(event.data).ScheduleWeek; // Если требуется JSON
            console.log(res);
            localStorage.setItem('localScheduleJSON', JSON.stringify(res));
            resolve(res); // Возвращаем данные через resolve
            sse.close(); // Закрываем соединение после получения данных
          } catch (err) {
            reject(err); // Ловим ошибки парсинга
          }
        };

        sse.onerror = (err) => {
          console.error('Error: ', err);
          const cachedData = localStorage.getItem("localScheduleJSON");
          if (cachedData) {
            try {
              resolve(JSON.parse(cachedData)); // Возвращаем данные из localStorage
            } catch (parseErr) {
              reject(new Error("Failed to parse cached data: " + parseErr)); // Если данные в localStorage повреждены
            }
          } else {
            reject(new Error("No cached data available and connection failed"));
          }
          sse.close(); // Закрываем соединение при ошибке
        };
      } catch (error) {
        reject(error); // Ловим глобальные ошибки
      }
    });
  }
}
