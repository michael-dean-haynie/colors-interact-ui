import { Subject } from 'rxjs';
import { GameState } from 'src/app/models/game-state.model';
import { Game } from 'src/app/models/game.model';
import { Input } from 'src/app/models/input.model';

export class GameEngine {

  gameState: GameState = { asOfFrame: 0 };
  render = new Subject<GameState>();
  killSignal = false;
  frameLength = 1000;

  private inputQueue: Input[] = [];

  constructor(private game: Game) { }

  queueInput(input: Input): void {
    this.inputQueue.push(input);
  }

  kill(): void {
    this.killSignal = true;
  }

  run(): void {
    this.game.logicalFrameRate = this.game.logicalFrameRate || 1;
    // determine frame length
    this.frameLength = 1000 / this.game.logicalFrameRate;

    this.setupNextTick();
  }


  private setupNextTick(): void {
    if (!this.killSignal) {
      const now: number = Date.now();
      const msTillNextFrame = (now - this.game.gameStart) % this.frameLength;
      setTimeout(this.tick.bind(this), msTillNextFrame);
    }
  }

  private tick(): void {
    const renderNeeded = false;

    const currentFrame = this.getCurrentFrame();

    // check for new inputs
    if (this.inputQueue.length > 0) {
      // check if any are for frames before the last processed frame (will need to rewind then)
      const lateInputs = this.inputQueue.filter(input => input.logicalFrame < this.gameState.asOfFrame);
      // get the earliest frame of the late inputs (frame where divergence happened)
      const divergentFrame = Math.min(...lateInputs.map(input => input.logicalFrame));
      this.rewindGameStateToFrame(divergentFrame - 1);

    }


    this.setupNextTick();

  }

  rewindGameStateToFrame(targetFrame: number): void {
    while (this.gameState.asOfFrame > targetFrame) {
      const inputsForFrame = this.game.inputs.filter(input => input.logicalFrame === this.gameState.asOfFrame);

      if (inputsForFrame.length > 0) {
        // check for ADD_PLAYER input type
        const addPlayerInputs = inputsForFrame.filter(input => input.type = 'ADD_PLAYER');
        addPlayerInputs.forEach(input => {

        });
      }

      this.gameState.asOfFrame--;
    }
  }

  private getCurrentFrame(): number {
    return Math.floor((Date.now() - this.game.gameStart) / this.frameLength);
  }
}
