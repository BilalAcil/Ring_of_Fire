import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  @ViewChild('wheelEl', { static: true }) wheelEl!: ElementRef<HTMLImageElement>;

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    const deg = -(y / 5);

    // Nur noch die Rotation setzen, kein translateX mehr nötig
    this.wheelEl.nativeElement.style.transform = `rotate(${deg}deg)`;
  }

  isMoving = false;
  private moveTimer: any;

  onMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty('--mx', `${e.clientX}px`);
    el.style.setProperty('--my', `${e.clientY}px`);

    this.isMoving = true;

    clearTimeout(this.moveTimer);
    this.moveTimer = setTimeout(() => {
      this.isMoving = false;
    }, 2000);
  }

}
