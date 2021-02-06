import { TestBed } from '@angular/core/testing';
import { GameEngineFactory } from './game-engine-factory';


describe('GameEngineFactory', () => {
  let service: GameEngineFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameEngineFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
