import request from '../index.js';
export const fetchStrategy = (payload) => request.get('/strategy', payload);

export const fetchStrategyCategory = (payload) => request.get('/strategy/type');

export const postDeleteStrategy = (payload) => request.delete('/strategy', payload);

export const postPublishStrategy = (payload) => request.post('/strategy', payload);

export const postEditStrategy = (payload) => request.put('/strategy', payload);

// 收藏相关
export const postCollect = (payload) => request.post('/collection', payload);

export const fetchCollection = (payload) => request.get('/collection', payload);

export const fetchCollectState = (payload) => request.get('/collection/status', payload);
