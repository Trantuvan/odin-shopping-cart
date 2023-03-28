import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

import styles from '../styles/NavBar.module.css';
import logo from '../imgs/logo.svg';
import usrAvt from '../imgs/image-avatar.png';
import Cart from './Cart';

const navLinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Products', to: 'products' },
];

function NavBar() {
  return (
    <nav className={clsx(styles.navContainer)}>
      <Link to={'/'} className={clsx(styles.navLogo)}>
        <img src={logo} alt="store-logo" />
      </Link>
      <ul className={clsx(styles.navLinks)}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive, isPending }) =>
                clsx(styles.navLink, {
                  [styles.active]: isActive ? true : false,
                  [styles.pending]: isPending ? true : false,
                })
              }
              to={link.to}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={clsx(styles.navActions)}>
        {/* <div className={clsx(styles.actionCart)}>
          <img src={cartIcon} alt="cart-icon" />
          <span>10</span>
        </div> */}
        <Cart />
        <div className={clsx(styles.actionAvatar)}>
          <img src={usrAvt} alt="user-avt" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
