import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import styles from '../styles/SearchTool.module.css';

const SearchTool = ({ placeholder = 'Search...', data }) => {
  const [filterData, setFilterData] = useState([]);

  const handleFiler = (evt) => {
    const searchWord = evt.target.value.toLowerCase();
    const newFiler = data.filter((val) => val.title.toLowerCase().includes(searchWord));

    if (searchWord.length === 0) {
      setFilterData([]);
      return;
    }
    setFilterData(newFiler);
  };

  return (
    <form className={clsx(styles.searchTool)}>
      <div className={clsx(styles.formControl)}>
        <input type="search" placeholder={placeholder} onChange={handleFiler} />
        {filterData.length !== 0 && (
          <ul className={clsx(styles.searchResult)}>
            {filterData.slice(0, 8).map((value, key) => (
              <li key={key}>
                <Link className={clsx(styles.searchItem)} to={`${value.id}`}>
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={clsx(styles.formControl)}>
        <button type="submit" className="primary">
          <FiSearch />
        </button>
      </div>
    </form>
  );
};

SearchTool.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default SearchTool;
