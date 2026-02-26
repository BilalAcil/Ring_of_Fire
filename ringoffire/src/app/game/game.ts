import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/gameModel';
import { Player } from '../player/player';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, Player, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './game.html',
  styleUrls: ['./game.scss'],
})
export class Game implements OnInit {
  game = new GameModel();
  currentCard = '';
  isAnimating = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new GameModel();
  }

  @ViewChild('pickedCard') pickedCardRef?: ElementRef<HTMLImageElement>;

  takeCard() {
    if (this.isAnimating) return;
    if (this.game.stack.length === 0) return;

    this.isAnimating = true;

    const card = this.game.stack.pop() || '';


    // Karte setzen (Element erscheint)
    this.currentCard = card;

    // im nächsten Tick: Animation zuverlässig neu starten
    setTimeout(() => {
      const el = this.pickedCardRef?.nativeElement;
      if (!el) { this.isAnimating = false; return; }

      el.classList.remove('pick-card');
      void el.offsetHeight;            // Reflow -> Animation reset
      el.classList.add('pick-card');

      // nach Animationsdauer wieder freigeben
      setTimeout(() => {
        this.game.playedCards.push(card);
        this.isAnimating = false;
      }, 1000); // muss zu CSS passen
    }, 0);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }
    );
  }
}