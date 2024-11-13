// import axios from 'axios'

import scheduleJSON from '../../../../../../schedule.json';

export default class ScheduleServer {
  static getWeek() {
    try {
      // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const response = scheduleJSON.ScheduleWeek
      return response
    } catch (error) {
      console.log("Error:  " + error);
    }
    
  }
}
