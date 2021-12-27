import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
          className={styles.filterInput}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
