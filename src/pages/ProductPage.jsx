import clsx from 'clsx';

import styles from '../styles/ProductPage.module.css';
import { SearchTool, FilterPrice, ProductItem } from '../components';

const ProductsPage = () => {
  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>
        <SearchTool />
        <FilterPrice />
      </div>
      {/* <ul className={clsx(styles.productList)}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductsPage;
