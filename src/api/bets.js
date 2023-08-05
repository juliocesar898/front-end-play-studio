import Cookies from 'js-cookie';
import axios from './axios';

export const getBetsRequest = () =>
  axios.get('/bets', {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
export const getBetRequest = (id) => axios.get(`/bets/${id}`);
export const createBetRequest = (bet) =>
  axios.post('/bets', bet, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
export const updateBetRequest = (bet) => axios.put(`/bets/${bet.id}`, bet);
export const deleteBetRequest = (id) => axios.delete(`/bets/${id}`);
