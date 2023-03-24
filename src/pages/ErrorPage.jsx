import clsx from 'clsx';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import styles from '../styles/ErrorPage.module.css';

const ErrorPage = () => {
  let statusText;
  let message;
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    statusText = error.statusText;
    message = error.data.message;
  }

  return (
    <div className={clsx(styles.errorPage)}>
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
