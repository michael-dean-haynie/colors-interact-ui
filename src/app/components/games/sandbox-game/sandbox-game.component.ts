import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { GameState } from 'src/app/models/game-state.model';
import { GameApiService } from 'src/app/services/game-api.service';
import { GameEngine } from 'src/app/services/game-engine/game-engine';
import { GameEngineFactory } from 'src/app/services/game-engine/game-engine-factory';

@Component({
  selector: 'app-sandbox-game',
  templateUrl: './sandbox-game.component.html',
  styleUrls: ['./sandbox-game.component.scss']
})
export class SandboxGameComponent implements OnInit, OnDestroy {

  gameActive = false;

  private gameEngine: GameEngine | undefined;

  private subscriptions: Subscription[] = [];

  constructor(
    private rxStompService: RxStompService,
    private gameApiService: GameApiService,
    private gameEngineFactory: GameEngineFactory
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  startNewGame(): void {
    this.subscriptions.push(
      this.gameApiService.startNewGame('SANDBOX').subscribe(game => {
        // create new game engine
        this.gameEngine = this.gameEngineFactory.create('SANDBOX', game);

        // subscribe to render notifications
        this.subscriptions.push(
          this.gameEngine.render.subscribe(gameState => {
            this.render(gameState);
          })
        );

        // start game engine
        this.gameEngine.run();

        // subscribe to inputs from server
        this.rxStompService.watch(`/topic/game/${game.id}/input`).subscribe((message: Message) => {
          console.log(`receiving message from /topic/game/${game.id}/input: `, message.body);
        });
      })
    );
  }

  private render(gameState: GameState): void {

  }

}
