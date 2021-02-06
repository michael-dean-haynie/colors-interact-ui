import { PlayerState } from './player-state.model';

export interface GameState {
    asOfFrame: number;
    players?: PlayerState[];
}