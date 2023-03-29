import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import styles from '../styles/RootLayout.module.css';
import { NavBar, Footer } from '../components';
import { CartProvider } from '../hooks';

function RootLayout() {
  return (
    <div className={clsx(styles.appContainer)}>
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default RootLayout;
