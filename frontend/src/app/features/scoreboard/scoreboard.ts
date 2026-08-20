import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GameService } from '../../game.service';
import { Player as PlayerModel } from '../../player.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './scoreboard.html',
  styleUrls: ['./scoreboard.scss'],
})
export class Scoreboard {
  name = '';
  players$: Observable<PlayerModel[]>;

  constructor(private game: GameService) {
    this.players$ = this.game.players$.pipe(
      map((players) => players.slice().sort((a, b) => b.score - a.score))
    );
  }

  add() {
    this.game.addPlayer(this.name);
    this.name = '';
  }

  setScore(p: PlayerModel, score: string) {
    this.game.setScore(p.id, Number(score));
  }

  reset() {
    this.game.resetGame();
  }

  trackById(_: number, p: PlayerModel) {
    return p.id;
  }
}
