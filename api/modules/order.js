import request from '../index.js';

export const fetchOrder = (payload) => request.get('/order', payload);
export const postTicketPayment = (payload) => request.post('/ticket/payment', payload);
export const postRoomPayment = (payload) => request.post('/room/payment', payload);
export const fetachCart = (payload) => request.get('/cart', payload);
export const postAddCart = (payload) => request.post('/cart', payload);
