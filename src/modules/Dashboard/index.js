import React from 'react';
import { connect } from 'react-redux';
import PlayerList from '../PlayerList';
import { createPlayer } from '../../redux/actions/player';
import { compactPlayer } from '../../redux/actions/settings';
import styles from './dashboard.module.scss';

class Dashboard extends React.Component {
  render () {
    const { createPlayer, compactPlayer } = this.props;
    return (
      <section className={styles.wrapper}>
        <header className={styles.control}>
          <button type="button" className="btn" onClick={() => {createPlayer()}}>
            create player
          </button>
          <button type="button" className="btn" onClick={() => {compactPlayer()}}>
            compact player
          </button>
        </header>
        <div className={styles.row}>
          <aside className={styles.helper}>
          </aside>
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
    // deletePlayer: pid => dispatch(deletePlayer(pid))
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);