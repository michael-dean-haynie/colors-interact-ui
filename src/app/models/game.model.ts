import { Input } from './input.model';

export interface Game {
    id?: number;
    logicalFrameRate: number;
    gameStart: number;
    inputs: Input[];
}