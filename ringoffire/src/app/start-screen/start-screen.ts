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
}
