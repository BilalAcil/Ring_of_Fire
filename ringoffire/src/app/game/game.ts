import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/gameModel';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.scss'],
})
export class Game implements OnInit {
  pickCardAnimation = false;
  game = new GameModel();

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new GameModel();
    console.log(this.game);
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}