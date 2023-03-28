import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form, Link } from 'react-router-dom';

import styles from '../styles/SearchTool.module.css';
import { readFromCache } from '../utils';

const SearchTool = ({ placeholder = 'Search...', name, defaultValue = '' }) => {
  const [filterData, setFilterData] = useState([]);
  const data = readFromCache('products');

  useEffect(() => {
    //*update search-input value when navigate back and forward
    document.querySelector('#search').value = defaultValue;
  }, [defaultValue]);

  const handleFilter = (evt) => {
    const searchWord = evt.target.value.toLowerCase();
    const newFiler = data.filter((val) => val.title.toLowerCase().includes(searchWord));

    if (searchWord.length === 0) {
      setFilterData([]);
      return;
    }
    setFilterData(newFiler);
  };

  // TODO: fix UX open/close dropdown
  return (
    // *default form method GET request auto attach ?title after path of route
    <Form className={clsx(styles.searchTool)} method="get">
      <div className={clsx(styles.formControl)}>
        <input
          type="search"
          id="search"
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={handleFilter}
        />
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
    </Form>
  );
};

SearchTool.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

export default SearchTool;
