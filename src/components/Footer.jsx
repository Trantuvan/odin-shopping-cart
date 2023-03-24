import clsx from 'clsx';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={clsx(styles.footerContainer)}>
      <div className={clsx(styles.customerService)}>
        <h3 className={clsx(styles.heading)}>customer service</h3>
        <ul className={clsx(styles.serviceList)}>
          <li>Help Centre</li>
          <li>How to Buy</li>
          <li>How to Sell</li>
          <li>Payment</li>
          <li>Shipping</li>
          <li>Return & Refund</li>
          <li>Warranty Policy</li>
        </ul>
      </div>
      <div className={clsx(styles.about)}>
        <h3 className={clsx(styles.heading)}>about sneakers</h3>
        <ul className={clsx(styles.aboutList)}>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Seller Centre</li>
          <li>Flash Deals</li>
          <li>Media Contact</li>
        </ul>
      </div>
      <div className={clsx(styles.followUs)}>
        <h3 className={clsx(styles.heading)}>follow us</h3>
        <ul className={clsx(styles.followList)}>
          <li>
            <BsFacebook />
            Facebook
          </li>
          <li>
            <RiInstagramFill />
            Instrgram
          </li>
          <li>
            <BsLinkedin />
            LinkedIn
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
