import React from 'react';
import { connect } from 'react-redux';
import Player from '../../components/Player';

const PlayerListBase = props => {
  const { players } = props;
  return (
    players.length !== 0 && players.map(el => <Player key={el.id} data={el} />)
  );
};

const mapStateToProps = state => ({
  players: state.player
});

export const PlayerList = connect(mapStateToProps, null)(PlayerListBase);
