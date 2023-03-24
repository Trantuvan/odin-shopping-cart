import clsx from 'clsx';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import styles from '../styles/FourZeroFourPage.module.css';

const FourZeroFourPage = () => {
  const error = useRouteError();

  // *if not route error response type re-throw Root Error hande
  // *only care for 404 error at this level if not re-throw
  if (!isRouteErrorResponse(error) || error.status !== 404) {
    throw error;
  }

  return <div className={clsx(styles.fourZeroFour)}></div>;
};

export default FourZeroFourPage;
