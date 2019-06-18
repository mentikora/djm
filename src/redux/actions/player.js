import { PLAYER_CREATE, PLAYER_DELETE } from './types';

export const createPlayer = () => ({ type: PLAYER_CREATE });
export const deletePlayer = pid => ({ type: PLAYER_DELETE, pid});