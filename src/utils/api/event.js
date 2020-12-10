import axios from 'axios';
import { config } from '../../config';
const token = localStorage.getItem('token');
const EVENT_ENDPOINT = `${config.API_ENDPOINT}/api/event`;

export default {
  createEvent: (newEvent) =>
    axios({
      method: 'post',
      url: `${EVENT_ENDPOINT}/create-event`,
      data: newEvent,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }),
};
