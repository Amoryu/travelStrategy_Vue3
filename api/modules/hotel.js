import request from '../index.js';

export const fetchHotel = (payload) => request.get('/hotel', payload);
export const fetchRoom = (payload) => request.get('/room', payload);

