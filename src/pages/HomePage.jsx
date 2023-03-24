/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';

import styles from '../styles/HomePage.module.css';
import heroImg from '../imgs/homepage-image.png';
import underline from '../imgs/underline.png';

const HomePage = () => {
  return (
    <div className={clsx(styles.homePageContainer)}>
      <div className={clsx(styles.heroContent)}>
        <h2>best online store of the year</h2>
        <h1>we don't do fashion, we are fashion</h1>
        <img src={underline} alt="under-text-img" />
        <button type="button">contact us</button>
      </div>
      <div className={clsx(styles.heroImg)}>
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default HomePage;
