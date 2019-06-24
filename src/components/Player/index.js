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
        {/* <div className={styles.info}>
          id: {id}, is compact: {`${compact}`}
        </div> */}
        <div className={styles.playlist}>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
          playlist<br/>
        </div>
        <div className={styles.actions}>
          <div className={styles.volume}>
            volume
          </div>
          <Button>
            <i className="icon-fast-bw" />
          </Button>
          <Button>
            <i className="icon-play" />
          </Button>
          {/* pause <button className="btn">
            <i className="icon-play" />
          </button> */}
          <Button>
            <i className="icon-fast-fw" />
          </Button>
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
