import { Routes } from '@angular/router';
import { Scoreboard } from './features/scoreboard/scoreboard';
import { EndScore } from './features/end-score/end-score';

export const routes: Routes = [
  { path: '', component: Scoreboard },
  { path: 'end-score', component: EndScore },
];
