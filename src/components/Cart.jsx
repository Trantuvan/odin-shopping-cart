import clsx from 'clsx';

import cartIcon from '../imgs/icon-cart.svg';
import styles from '../styles/Cart.module.css';

function Cart() {
  return (
    <div className="cartContainer">
      <div className={clsx(styles.cart)}>
        <img src={cartIcon} alt="cart-icon" />
        <span>10</span>
      </div>
    </div>
  );
}

export default Cart;
