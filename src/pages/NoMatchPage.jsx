import clsx from 'clsx';

import styles from '../styles/NoMatchPage.module.css';
import noMatchImg from '../imgs/no-match.png';

const NoMatchPage = () => {
  // * No match url is not a bug (it is a warning from react-router-dom)
  // * inform user uses wrong url link
  // * useRouteError return undefined
  // * if server response with 404 it is a error
  return (
    <div className={clsx(styles.noMatch)}>
      <img src={noMatchImg} alt="no-match-img" />
      <h3>No results found</h3>
      <p>Try different or more general keywords</p>
    </div>
  );
};

export default NoMatchPage;
