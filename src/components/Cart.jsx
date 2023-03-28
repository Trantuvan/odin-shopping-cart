import clsx from 'clsx';

import cartIcon from '../imgs/icon-cart.svg';
import deleteIcon from '../imgs/icon-delete.svg';
import itemImg from '../imgs/item-img.jpg';
import styles from '../styles/Cart.module.css';

const carts = [
  {
    productId: 2,
    quantity: 3,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
  },
  {
    productId: 13,
    quantity: 1,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
  },
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
        <div className={clsx(styles.cartList)}>
          {carts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className={clsx(styles.itemContainer)}>
              <ul className={clsx(styles.itemList)}>
                {carts.map((c) => (
                  <li key={c.productId}>
                    <div className={clsx(styles.itemImg)}>
                      <img src={itemImg} alt="item-img" />
                    </div>
                    <div className={clsx(styles.itemContents)}>
                      <div className={clsx(styles.itemTitle)}>{c.title}</div>
                      <div className={clsx(styles.price)}>
                        {`$${c.price} x ${c.quantity}`} <span>{`$${c.price * c.quantity}`}</span>
                      </div>
                    </div>
                    <button type="button">
                      <img src={deleteIcon} alt="delete-item" />
                    </button>
                  </li>
                ))}
              </ul>
              <button type="button" className={clsx(styles.checkout)}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
