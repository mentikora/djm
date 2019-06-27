import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import Button from '../../components/Button';
import PlayerList from '../PlayerList';

import { createPlayer } from '../../redux/actions/player';
import { compactPlayer } from '../../redux/actions/settings';

import styles from './dashboard.module.scss';

class Dashboard extends React.Component {
  render () {
    const { t, i18n, createPlayer, compactPlayer, compact, player } = this.props;
    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <Button onClick={() => {createPlayer()}}>
            {t('createPlayer')}
          </Button>
          <Button
            disabled={player.length === 0}
            className={compact ? styles.isActive : ''}
            onClick={() => {compactPlayer()}}
          >
            {t('compactPlayer')}
          </Button>
          {
            console.log(i18n)
          }
          <Button
            className={i18n.language === 'jp' ? styles.isActive : ''}
            onClick={() => i18n.changeLanguage('jp')}
          >
              JP
          </Button>
          <Button
            className={i18n.language === 'en' ? styles.isActive : ''}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </Button>
        </header>
        <div className={styles.row}>
          {/* <aside className={styles.helper}>
          </aside> */}
          <aside className={styles.content}>
            <div/>
            <PlayerList/>
          </aside>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    compact: state.settings.compact,
    player: state.player
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createPlayer: () => dispatch(createPlayer()),
    compactPlayer: () => dispatch(compactPlayer()),
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
