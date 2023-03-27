import clsx from 'clsx';
import { Form, useSubmit } from 'react-router-dom';

import styles from '../styles/FilterPrice.module.css';

function FilterPrice() {
  const submit = useSubmit();

  return (
    <div className={clsx(styles.priceFilterContainer)}>
      <p>Sort By</p>
      <Form>
        <select name="sort-price" id="price" onChange={(e) => submit(e.currentTarget.form)}>
          <option value="">Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </Form>
    </div>
  );
}

export default FilterPrice;
