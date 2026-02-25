import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.html',
  styleUrls: ['./player.scss'],
  host: {
    class: 'player-position'
  }
})
export class Player {
  @Input() name: string = '';
}
