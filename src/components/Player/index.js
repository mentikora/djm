import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import Button from '../Button';
import Range from '../Range';
import Playlist from './playlist';

import { deletePlayer} from '../../redux/actions/player';

import styles from './player.module.scss';

const fakelist = [
  {
    name: 'Metallica - Orion',
    duration: '5:21'
  },
  {
    name: 'ACDC',
    duration: 'Back to black'
  },
]

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 100,
      volume: 100,
      lock: false,
    }
  }

  onSpeedChange(newPlayerSpeed) {
    this.setState({
      speed: newPlayerSpeed
    })
  }
  onVolumeChange(newPlayerVolume) {
    this.setState({
      volume: newPlayerVolume
    })
  }

  lockPlayer = () => {
    this.setState(prevState => ({lock: !prevState.lock}));
  }
  
  render () {
    const {
      deletePlayer,
      data: {
        id
      },
      compact
    } = this.props;
    return (
      <div className={
        cx(
          `${styles.player} shadow-4`,
          {[styles.isCompact]: compact}
        )
      }>
        <div className="text-right">
          <Button
            className={
              cx(
                styles.playerControlButton,
                {[styles.isActive]: this.state.lock}
              )
            }
            onClick={this.lockPlayer}
            icon="icon-lock"
            title="lock"
          />
          <Button
            disabled={this.state.lock}
            className={styles.playerControlButton}
            onClick={() => deletePlayer(id)}
            icon="icon-cancel"
            title="delete"
          />
        </div>
        {/* <div className={styles.info}>
          id: {id}, is compact: {`${compact}`}
        </div> */}
        <div className={styles.playlist}>
          <Playlist list={fakelist} />
        </div>
        <div className={styles.actions}>
          <div className={styles.playspeed}>
            <Range max={200} onChange={this.onSpeedChange.bind(this)}/>
          </div>
          <div className={styles.volume}>
            <Range onChange={this.onVolumeChange.bind(this)}/>
          </div>
          <Button
            icon="icon-fast-bw"
            title="prev"
          />
          <Button
            icon="icon-play"
            title="play"
          />
          {/* pause <button className="btn">
            <i className="icon-play" />
          </button> */}
          <Button
            icon="icon-fast-fw"
            title="next"
          />
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
