import React from 'react';
import { connect } from 'react-redux';
import Player from '../../components/Player';

class PlayerList extends React.Component {
  render () {
    const {
      players,
    } = this.props;
    return (
      <React.Fragment>
        {
          players.length !== 0 && players.map(el => <Player key={el.id} data={el} />)
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.player
  }
}

export default connect(mapStateToProps, null)(PlayerList);