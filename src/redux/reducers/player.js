import {
  PLAYER_CREATE,
  PLAYER_DELETE,
} from '../actions/types';
import uniqueId from 'lodash/uniqueId';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
  switch (action.type) {
    case PLAYER_CREATE:
      return [
        ...state,
        {
          id: uniqueId(),
          isPlaying: false,
          playlist: null
        }
      ]
    case PLAYER_DELETE:
      const index = findIndex(state, { id: action.pid});
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;
    default: return state;
  }
}
