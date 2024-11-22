export default class ScheduleServer {
  static async getWeek(setScheduleWeek, setError) {
    return new Promise(() => {
      try {
        // const sse = new EventSource('http://localhost:8080/schedule');
        const sse = new EventSource('http://172.24.1.201:8080/schedule');


        sse.onopen = () => console.log('>>> Connection opened!');

        sse.addEventListener('schedule', (event) => {
          const parsedData = JSON.parse(event.data);
          const res = parsedData.ScheduleWeek;
          localStorage.setItem('localScheduleJSON', JSON.stringify(res));
          setError(null);
          setScheduleWeek(res);
        });

        sse.onerror = (err) => {
          console.error('Error Server: ', err);
          const cachedData = localStorage.getItem('localScheduleJSON');
          if (cachedData) {
            try {
              const parsedData = JSON.parse(cachedData);
              setError(null);
              setScheduleWeek(parsedData); // Возвращаем кэшированные данные
            } catch (parseErr) {
              setError('Невозможно разобрать кэшированные данные');
              console.error('Не удалось разобрать кэшированные данные: ' + parseErr);
            }
          } else {
            setError('Нет доступных кэшированных данных, и соединение не удалось');
          }
        };
      } catch (error) {
        setError('Глобальная ошибка: ' + error); // Ловим глобальные ошибки
      }
    });
  }
}
