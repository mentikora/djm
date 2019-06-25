import React from 'react';
import { connect } from 'react-redux';
import PlayerList from '../PlayerList';
import Button from '../../components/Button';
import { createPlayer } from '../../redux/actions/player';
import { compactPlayer } from '../../redux/actions/settings';
import styles from './dashboard.module.scss';
import { en } from '../../utils/translation';

// import { Translation } from 'react-i18next';
import { withTranslation } from 'react-i18next';

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
            disabled={!player.length === 0}
            className={compact ? styles.isActive : null}
            onClick={() => {compactPlayer()}}
          >
            {t('compactPlayer')}
          </Button>
          <Button onClick={() => i18n.changeLanguage('jp')}>JP</Button>
          <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
        </header>
        <div className={styles.row}>
          {/* <aside className={styles.helper}>
          </aside> */}
          <aside className={styles.content}>
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