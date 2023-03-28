import clsx from 'clsx';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import plusIcon from '../imgs/icon-plus.svg';
import minusIcon from '../imgs/icon-minus.svg';
import styles from '../styles/ProductDetail.module.css';
import { getProductById } from '../apis';

function ProductDetail() {
  const {
    product: {
      title,
      description,
      category,
      image,
      price,
      rating: { count: maxQuantity },
    },
  } = useLoaderData();
  const [quanity, setQuanity] = useState(1);

  const increment = () =>
    setQuanity((c) => {
      if (c === maxQuantity) {
        return maxQuantity;
      }
      return c + 1;
    });
  const decrement = () =>
    setQuanity((c) => {
      if (c === 0) {
        return 0;
      }
      return c - 1;
    });

  return (
    <div className={clsx(styles.productDetailContainer)}>
      <div className={clsx(styles.heroImg)}>
        <img src={image} alt="product-img" />
      </div>
      <div className={clsx(styles.contents)}>
        <div className={clsx(styles.contentsHeading)}>
          <h2 className={clsx(styles.category)}>{category}</h2>
          <h1 className={clsx(styles.title)}>{title}</h1>
        </div>
        <p className={clsx(styles.description)}>{description}</p>
        <div className={clsx(styles.price)}>${price}</div>
        <div className={clsx(styles.actions)}>
          <div className={clsx(styles.counter)}>
            <button type="button" className={clsx(styles.actionLeft)} onClick={decrement}>
              <img src={minusIcon} alt="decrement" />
            </button>
            <div className={clsx(styles.quanity)}>{quanity}</div>
            <button type="button" className={clsx(styles.actionRight)} onClick={increment}>
              <img src={plusIcon} alt="increment" />
            </button>
          </div>
          <button className={clsx(styles.addToCart)}>
            <div className={clsx(styles.cartImg)}>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
const loader = async ({ params: { productId } }) => {
  const product = await getProductById(productId);
  return { product };
};

export { loader };
export default ProductDetail;
