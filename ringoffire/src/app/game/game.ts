import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/gameModel';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.scss'],
})
export class Game {
  game = new GameModel();
  currentCard = '';
  isAnimating = false;

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
}