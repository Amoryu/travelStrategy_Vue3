import request from '../index.js';

export const fetchBillBoard = (payload) => request.post('/billboard', payload);
export const fetchSwiperPic = () => request.get('/swiper');
export const postImage = (payload) => request.post('/image', payload);
export const fetchTourRoute = () => request.get('/route');
//地址接口
export const fetchCurrentArea = () => request.get('/curArea');
export const postCurrentArea = (payload) => request.post('/curArea', payload);
