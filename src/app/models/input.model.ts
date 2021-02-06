import { InputType } from './enums/input-type.enum';
import { Player } from './player.model';

export interface Input {
    id?: number;
    logicalFrame: number;
    type?: InputType;
    player?: Player;
}