import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameType } from '../models/enums/game-type.enum';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private baseUrl = `${environment.apiRestEndpointsProtocol}${environment.apiBaseUrl}/game`;

  constructor(
    private http: HttpClient
  ) { }

  startNewGame(gameType: GameType): Observable<Game> {
    return this.http.post<Game>(`${this.baseUrl}/new/${gameType}`, {});
  }
}
