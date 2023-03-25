const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');

  if (response.ok === false) {
    throw new Response(`${response.statusText}`, { status: response.status });
  }

  return await response.json();
};

export { getAllProducts };
