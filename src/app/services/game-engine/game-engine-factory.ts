import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameType } from '../../models/enums/game-type.enum';
import { GameEngine } from './game-engine';

@Injectable({
  providedIn: 'root'
})
export class GameEngineFactory {

  constructor() { }

  create(gameType: GameType, game: Game): GameEngine {
    if (gameType === 'SANDBOX') {
      return new GameEngine(game);
    } else {
      throw new Error(`Could not create game engine for game type "${gameType}"`);
    }

  }
}
