import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import useCart, { REMOVE } from '../hooks/useCart';

import cartIcon from '../imgs/icon-cart.svg';
import deleteIcon from '../imgs/icon-delete.svg';
import styles from '../styles/Cart.module.css';

function Cart() {
  const [cart, setCart] = useCart();
  const { productId } = useParams();
  const handleDelete = () => setCart({ type: REMOVE, productId: parseInt(productId) });

  return (
    <div className={clsx(styles.cartContainer)}>
      <div className={clsx(styles.cart)}>
        <img src={cartIcon} alt="cart-icon" />
        {cart.length !== 0 && <span>{cart.length}</span>}
      </div>
      <div className={clsx(styles.cartDropdown)}>
        <h2>Cart</h2>
        <div className={clsx(styles.cartList)}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className={clsx(styles.itemContainer)}>
              <ul className={clsx(styles.itemList)}>
                {cart.map((c) => (
                  <li key={c.productId}>
                    <div className={clsx(styles.itemImg)}>
                      <img src={c.image} alt="item-img" />
                    </div>
                    <div className={clsx(styles.itemContents)}>
                      <div className={clsx(styles.itemTitle)}>{c.title}</div>
                      <div className={clsx(styles.price)}>
                        {`$${c.price} x ${c.quantity}`} <span>{`$${(c.price * c.quantity).toFixed(2)}`}</span>
                      </div>
                    </div>
                    <button type="button" onClick={handleDelete}>
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
