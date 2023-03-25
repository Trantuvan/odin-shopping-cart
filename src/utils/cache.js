const readFromCache = (key) => JSON.parse(localStorage.getItem(key)) || null;

const writeToCache = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export { readFromCache, writeToCache };
