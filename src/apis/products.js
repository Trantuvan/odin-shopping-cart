import { readFromCache, writeToCache } from '../utils';

const getAllProducts = async () => {
  let products = readFromCache('products');

  if (products && products.length !== 0) {
    return products;
  }

  const response = await fetch('https://fakestoreapi.com/products');

  if (response.ok === false) {
    throw new Response(`${response.statusText}`, { status: response.status });
  }

  products = await response.json();
  writeToCache('products', products);

  return products;
};

const getProductsByTitle = async (title) => {
  let products = readFromCache('products');
  if (title) {
    return products.filter((product) => product.title.toLowerCase().includes(title.toLowerCase()));
  }
  return products;
};

const sortProductsByPrice = async (sortPrice) => {
  let products = readFromCache('products');

  if (sortPrice === 'asc') {
    return products.sort((a, b) => a.price - b.price);
  }
  if (sortPrice === 'desc') {
    return products.sort((a, b) => b.price - a.price);
  }

  return products;
};

export { getAllProducts, getProductsByTitle, sortProductsByPrice };
