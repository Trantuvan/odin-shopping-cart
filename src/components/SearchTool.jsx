import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form } from 'react-router-dom';

import styles from '../styles/SearchTool.module.css';

const SearchTool = ({ placeholder = 'Search...', name, defaultValue = '' }) => {
  useEffect(() => {
    //*update search-input value when navigate back and forward
    document.querySelector('#search').value = defaultValue;
  }, [defaultValue]);

  // TODO: support auto-suggestion search
  //* manually support auto-suggestion data search out of sync with react-router-dom
  return (
    // *default form method GET request auto attach ?title after path of route
    <Form className={clsx(styles.searchTool)} method="get">
      <div className={clsx(styles.formControl)}>
        <input type="search" id="search" name={name} placeholder={placeholder} defaultValue={defaultValue} />
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
