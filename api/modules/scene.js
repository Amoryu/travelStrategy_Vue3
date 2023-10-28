import request from '../index.js';

export const fetchSearchScene = (payload) => request.get('/scenery/search', payload);
export const fetchSceneList = (payload) => request.get('/scenery/all', payload);
export const fetchScene = (payload) => request.get('/scenery', payload);
export const fetchTickets = (payload) => request.get('/ticket', payload);
