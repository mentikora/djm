import React from 'react';
import styles from './player.module.scss';

// const onTrackClick = (e) => {
//   console.log(e.target.name);
// }
// add react-beautiful-dnd
const Playlist = ({ list }) => {
  const onTrackClick = (e) => {
    console.log(e.target);
  }
  return (
    <ul className={styles.playlist}>
      {list.map(el => {
        return (
          <li
            key={el.name}
            className={styles.track}
            onClick={onTrackClick}
            // onDoubleClick={this.onTrackDoubleClick}
          >
            <p className={styles.name}>{el.name}</p>
            <p className={styles.duration}>{el.duration}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Playlist;
