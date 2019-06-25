import React from 'react';
import { connect } from 'react-redux';
import PlayerList from '../PlayerList';
import Button from '../../components/Button';
import { createPlayer } from '../../redux/actions/player';
import { compactPlayer } from '../../redux/actions/settings';
import styles from './dashboard.module.scss';
import { en } from '../../utils/translation';

class Dashboard extends React.Component {
  render () {
    const { createPlayer, compactPlayer } = this.props;
    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <Button type="button" onClick={() => {createPlayer()}}>
            {en.createPlayer}
          </Button>
          <Button type="button" onClick={() => {compactPlayer()}}>
            {en.compactPlayer}
          </Button>
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

const mapDispatchToProps = dispatch => {
  return {
    createPlayer: () => dispatch(createPlayer()),
    compactPlayer: () => dispatch(compactPlayer()),
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);