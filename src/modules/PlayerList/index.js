import React from 'react';
import { connect } from 'react-redux';
import {createPlayer, deletePlayer} from '../../redux/actions/player';


class PlayerList extends React.Component {
  render () {
    const {
      players,
      createPlayer,
      deletePlayer
    } = this.props;
    return (
      <div>
        <button type="button" onClick={() => {createPlayer()}}>
          create player
        </button>

        {
          players.length !== 0 && players.map(el => {
            return (
              <div key={el.id} onClick={() => {deletePlayer(el.id)}}>
                {el.id}
                <br/>
                is playing: {el.isPlaying ? 'true' : 'false'}
                <br/>
                playlist: {el.playlist !== null ? 'got something': 'false'}
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.player
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createPlayer: () => dispatch(createPlayer()),
    deletePlayer: pid => dispatch(deletePlayer(pid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);