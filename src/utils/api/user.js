import axios from 'axios';
import { config } from '../../config';
const token = localStorage.getItem('token');
const USER_ENDPOINT = `${config.API_ENDPOINT}/api/user`;

export default {
  signUp: (newUser) => axios.post(`${USER_ENDPOINT}/sign-up`, newUser),
  signIn: (userCredential) =>
    axios.post(`${USER_ENDPOINT}/sign-in`, userCredential),
  getDbUser: (username) =>
    axios({
      method: 'get',
      url: `${USER_ENDPOINT}/${username}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }),
  updateProfile: (userNewInfo) =>
    axios({
      method: 'post',
      url: `${USER_ENDPOINT}/${userNewInfo.get('username')}/update-profile`,
      data: userNewInfo,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }),
  uploadPhotos: (photos) =>
    axios({
      method: 'post',
      url: `${USER_ENDPOINT}/'${localStorage.getItem(
        'username'
      )}/upload-photos`,
      data: photos,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }),
  getUserEvents: (username) =>
    axios({
      method: 'get',
      url: `${USER_ENDPOINT}/${username}/events`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getAllUsers: function () {
    return axios({
      method: 'get',
      url: `${USER_ENDPOINT}/search-friends`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};
