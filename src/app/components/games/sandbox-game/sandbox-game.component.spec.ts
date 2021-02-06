import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxGameComponent } from './sandbox-game.component';

describe('SandboxGameComponent', () => {
  let component: SandboxGameComponent;
  let fixture: ComponentFixture<SandboxGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
