import React from 'react';
import { connect } from 'react-redux';
import { deletePlayer} from '../../redux/actions/player';
import styles from './player.module.scss';

class Player extends React.Component {
  render () {
    const {
      deletePlayer,
      data: {
        id
      }
    } = this.props;
    return (
      <div className={styles.player}>
        <button className="btn" onClick={() => deletePlayer(id)}>
          &times;
        </button>
        <div className={styles.info}>
          id: {id}
        </div>
        <div className={styles.playlist}>
          playlist
        </div>
        <div className={styles.actions}>
          <div className={styles.volume}>
            volume
          </div>
          <button className="btn">prev</button>
          <button className="btn">play</button>
          <button className="btn">pause</button>
          <button className="btn">next</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlayer: pid => dispatch(deletePlayer(pid))
  }
}

export default connect(null, mapDispatchToProps)(Player);