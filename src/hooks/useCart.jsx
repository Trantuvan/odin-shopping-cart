/* eslint-disable no-case-declarations */
import { createContext, useContext, useMemo, useReducer } from 'react';

const ADD = 'add';
const REMOVE = 'remove';

const CartContext = createContext(undefined);

function cartsReducer(cart, action) {
  switch (action.type) {
    case ADD:
      const seletedItem = cart.find((item) => item.productId === action.item.productId);
      if (seletedItem === undefined) {
        return [...cart, action.item];
      }
      return cart.map((item) => {
        if (item.productId === action.item.productId) {
          return { ...item, quantity: action.item.quantity + item.quantity };
        } else {
          return item;
        }
      });
    case REMOVE:
      console.log(cart);
      return cart.filter((item) => item.productId !== action.productId);

    default:
      throw new Error('Unsupported action type:' + action.type);
  }
}

function CartProvider(props) {
  const [cart, setCart] = useReducer(cartsReducer, []);
  const value = useMemo(() => [cart, setCart], [cart]);
  return <CartContext.Provider value={value} {...props} />;
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { ADD, REMOVE, CartProvider };
export default useCart;
