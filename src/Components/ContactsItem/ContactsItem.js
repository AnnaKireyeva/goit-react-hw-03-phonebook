import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactsItem}>
      <div className={styles.contactWrapper}>
        <p className={styles.contactName}>{name}:</p>
        <p className={styles.contactNumber}>{number}</p>
      </div>

      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={styles.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactsItem;
