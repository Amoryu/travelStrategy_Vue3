import request from '../index.js';

export const postUpdateUserInfo = (payload) => request.put('/user/info', payload);
export const fetchArticleAuthor = () => request.get('/users');
export const fetchUser = (payload) => request.get('/user', payload);
export const login = (payload) => request.post('/user/login', payload);
export const register = (payload) => request.put('/register', payload);
