import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.scss'],
})
export class Game implements OnInit {
  pickCardAnimation = false;

  constructor() { }

  ngOnInit(): void {

  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}