import { Suspense } from 'react';
import clsx from 'clsx';
import { Await, defer, Link, useLoaderData } from 'react-router-dom';

import styles from '../styles/ProductPage.module.css';
import { SearchTool, ProductItem, Skeleton } from '../components';
import { getAllProducts, getProductsByTitle } from '../apis';

const ProductsPage = () => {
  const { products, title } = useLoaderData();

  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>
        <SearchTool name="title" defaultValue={title} />
      </div>
      <ul className={clsx(styles.productList)}>
        <Suspense fallback={<Skeleton type="product" count={20} />}>
          <Await resolve={products}>
            {(resolvedProducts) =>
              resolvedProducts.map((product) => (
                <li key={product.id}>
                  <Link to={`${product.id}`} className={clsx(styles.productItem)}>
                    <ProductItem product={product} />
                  </Link>
                </li>
              ))
            }
          </Await>
        </Suspense>
      </ul>
    </div>
  );
};

const loader = async ({ request }) => {
  let products;
  const url = new URL(request.url);
  const titleQuery = url.searchParams.get('title');

  if (titleQuery) {
    products = await getProductsByTitle(titleQuery);
    return { products, title: titleQuery };
  }
  products = getAllProducts();

  return defer({ products });
};

export { loader };
export default ProductsPage;
