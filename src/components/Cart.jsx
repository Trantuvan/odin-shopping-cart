import clsx from 'clsx';

import cartIcon from '../imgs/icon-cart.svg';
import styles from '../styles/Cart.module.css';

const carts = [
  //   {
  //     productId: 7,
  //     quantity: 3,
  //   },
  //   {
  //     productId: 8,
  //     quantity: 1,
  //   },
];

function Cart() {
  return (
    <div className={clsx(styles.cartContainer)}>
      <div className={clsx(styles.cart)}>
        <img src={cartIcon} alt="cart-icon" />
        {carts.length !== 0 && <span>{carts.length}</span>}
      </div>
      <div className={clsx(styles.cartDropdown)}>
        <h2>Cart</h2>
        <div className={clsx(styles.cartList)}>{carts.length === 0 ? <p>Your cart is empty.</p> : 'list'}</div>
      </div>
    </div>
  );
}

export default Cart;
