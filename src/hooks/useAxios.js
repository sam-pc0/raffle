import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
  credentials: 'same-origin',
  mode: 'no-cors',
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  },
});
