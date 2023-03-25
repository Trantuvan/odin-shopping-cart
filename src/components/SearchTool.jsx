import clsx from 'clsx';
import { FiSearch } from 'react-icons/fi';

import styles from '../styles/SearchTool.module.css';

const SearchTool = () => {
  return (
    <form className={clsx(styles.searchTool)}>
      <div className="formControl">
        <input type="search" placeholder="Search..." />
      </div>
      <div className="formControl">
        <button type="submit" className="primary">
          <FiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchTool;
