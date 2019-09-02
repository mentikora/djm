import React, { useState } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { withTranslation } from 'react-i18next';

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

const PlayerBase = props => {
  const [speed, onSpeedChange] = useState(100);
  const [volume, onVolumeChange] = useState(100);
  const [lock, lockPlayer] = useState(false);

  //   this.inputUploadRef = React.createRef();

  //   this.onUploadPlaylist = this.onUploadPlaylist.bind(this);
  // }

  // lockPlayer = () => {
  //   this.setState(prevState => ({lock: !prevState.lock}));
  // }

  // onSpeedChange(newPlayerSpeed) {
  //   this.setState({
  //     speed: newPlayerSpeed
  //   })
  // }
  // onVolumeChange(newPlayerVolume) {
  //   this.setState({
  //     volume: newPlayerVolume
  //   })
  // }
  // onUploadPlaylist(){
  //   this.inputUploadRef.current.click();
  // }

  const {
    deletePlayer,
    data: { id },
    compact,
    t,
  } = props;
  return (
    <div className={
      cx(
        `${styles.player} shadow-4`,
        {[styles.isCompact]: compact}
      )
    }>
      <div className="text-right">
        <Button
          onClick={() => lockPlayer(prev => !prev)}
          className={
            cx(
              styles.playerControlButton,
              {[styles.isActive]: lock}
            )
          }
          icon="icon-lock"
          title={t('lock')}
        />
        <Button
          onClick={() => deletePlayer(id)}
          disabled={lock}
          className={styles.playerControlButton}
          icon="icon-cancel"
          title={t('delete')}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.side}>
          <div className={styles.playlist}>
            <Playlist list={fakelist} />
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.actions}>
            <input
              type="file"
              className={styles.hidden}
              accept=".WAV, .MP3, .Ogg, .AAC"
              // ref={this.inputUploadRef}
              multiple
            />
            <Button
              icon="icon-upload"
              title={t('upload')}
              // onClick={this.onUploadPlaylist}
            />
          </div>
          <div className={styles.playspeed}>
            <Range
              max={200}
              icon="icon-sliders"
              onChange={speed => onSpeedChange(speed)}
            />
          </div>
          <div className={styles.volume}>
            <Range
              icon="icon-volume-up"
              onChange={volume => onVolumeChange(volume)}
            />
          </div>
          <div className={styles.actions}>
            <Button
              icon="icon-fast-bw"
              title={t('prev')}
            />
            <Button
              icon="icon-play"
              title={t('play')}
            />
            <Button
              icon="icon-fast-fw"
              title={t('next')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  compact: state.settings.compact
});

const mapDispatchToProps = dispatch => {
  return {
    deletePlayer: pid => dispatch(deletePlayer(pid))
  }
}

export const Player = withTranslation()(connect(mapStateToProps, mapDispatchToProps)(PlayerBase));
