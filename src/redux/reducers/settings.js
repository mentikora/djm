import {
  PLAYER_COMPACT
} from '../actions/types';

const initialState = {
  compact: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PLAYER_COMPACT:
      return {
        ...state,
        compact: !state.compact
      }
    
    default: return state;
  }
}