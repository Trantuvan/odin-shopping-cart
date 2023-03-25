import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../styles/Skeleton.module.css';

const Skeleton = ({ type, count = 1 }) => {
  const ProductSkeleton = () => (
    <div className={clsx(styles.prodSk)}>
      <div className={clsx(styles.prodSkImg)} />
      <div className={clsx(styles.prodSkInfo)}>
        <div className={clsx(styles.prodSkText)} />
        <div className={clsx(styles.prodSkText, styles.sm)} />
        <div className={clsx(styles.prodSkReview)}>
          <div className={clsx(styles.prodSkText, styles.xs)} />
          <div className={clsx(styles.prodSkText, styles.xs)} />
        </div>
      </div>
    </div>
  );

  if (type === 'product') {
    return Array(count)
      .fill(null)
      .map((_, idx) => (
        <li key={idx}>
          <ProductSkeleton />
        </li>
      ));
  }

  return null;
};

Skeleton.propTypes = {
  type: PropTypes.oneOf(['product']).isRequired,
  count: PropTypes.number,
};
export default Skeleton;
