import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img src={avatar} alt="Friend avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

export default FriendListItem;
