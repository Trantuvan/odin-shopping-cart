import clsx from 'clsx';

import styles from '../styles/FilterPrice.module.css';

function FilterPrice() {
  return (
    <div className={clsx(styles.priceFilterContainer)}>
      <p>Sort By</p>
      <form>
        <select name="price" id="price">
          <option value="">Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </form>
    </div>
  );
}

export default FilterPrice;
