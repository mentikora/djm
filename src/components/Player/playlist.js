import React from 'react';
import styles from './player.module.scss';

const Track = props => {
  const { data } = props;
  return (
    <li className={styles.track}>
      <p className={styles.name}>{data.name}</p>
      <p className={styles.duration}>{data.duration}</p>
    </li>
  );
}

// add react-beautiful-dnd
const Playlist = props => {
  const { list } = props;
  return (
    <ul className={styles.playlist}>
      {
        list.map(el => <Track key={el.name} data={el} />)
      }
    </ul>
  );
}

export default Playlist;