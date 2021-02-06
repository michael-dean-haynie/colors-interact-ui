import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxGameComponent } from './components/games/sandbox-game/sandbox-game.component';

const routes: Routes = [
  { path: 'sandbox', component: SandboxGameComponent },
  // empty url
  { path: '', pathMatch: 'full', redirectTo: 'sandbox' },
  // anything else
  { path: '**', pathMatch: 'full', redirectTo: 'sandbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
