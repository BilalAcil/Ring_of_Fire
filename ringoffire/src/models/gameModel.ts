export class GameModel {
  players: string[] = [];
  stack: string[] = [];
  playedCards: string[] = [];
  currentPlayer = 0;

  constructor() {
    const suits = ['clubs', 'diamonds', 'hearts', 'ace'];
    for (const suit of suits) {
      for (let i = 1; i <= 13; i++) {
        this.stack.push(`${suit}_${i}`);
      }
    }
    this.shuffle(this.stack);
  }

  private shuffle(array: string[]): string[] {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}