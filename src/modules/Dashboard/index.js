import React from 'react';
import { connect } from 'react-redux';
import PlayerList from '../PlayerList';
import { createPlayer } from '../../redux/actions/player';
import styles from './dashboard.module.scss';

class Dashboard extends React.Component {
  render () {
    const { createPlayer } = this.props;
    return (
      <section className={styles.wrapper}>
        <header className={styles.control}>
          <button type="button" className="btn" onClick={() => {createPlayer()}}>
            create player
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
    // deletePlayer: pid => dispatch(deletePlayer(pid))
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);