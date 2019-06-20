import React from 'react';
import { connect } from 'react-redux';
import { deletePlayer} from '../../redux/actions/player';
import Button from '../Button';
import styles from './player.module.scss';
import cx from 'classnames';

class Player extends React.Component {
  render () {
    const {
      deletePlayer,
      data: {
        id
      },
      compact
    } = this.props;
    return (
      <div className={cx(`${styles.player}`, {[styles.isCompact]: compact})}>
        <Button onClick={() => deletePlayer(id)}>
          <i className="icon-cancel" />
        </Button>
        <Button>
          ops
        </Button>
        <div className={styles.info}>
          id: {id}, is compact: {`${compact}`}
        </div>
        <div className={styles.playlist}>
          playlist
        </div>
        <div className={styles.actions}>
          <div className={styles.volume}>
            volume
          </div>
          <button className="btn">
            <i className="icon-fast-bw" />
          </button>
          <button className="btn">
            <i className="icon-play" />
          </button>
          {/* pause <button className="btn">
            <i className="icon-play" />
          </button> */}
          <button className="btn">
            <i className="icon-fast-fw" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    compact: state.settings.compact
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlayer: pid => dispatch(deletePlayer(pid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);