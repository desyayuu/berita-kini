import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit, OnDestroy {
  items = [
    { color: '#00CAA3', title: 'Petualangan Edukatif bersama Malang Mbois City Tour!', descTitle: 'Petualangan Edukatif bersama Malang Mbois City Tour!' },
    { color: '#0090FF', title: 'Petualangan Edukatif bersama Malang Mbois City Tour!', descTitle: 'Petualangan Edukatif bersama Malang Mbois City Tour!' },
    { color: 'blue', title: 'Petualangan Edukatif bersama Malang Mbois City Tour!', descTitle: 'Petualangan Edukatif bersama Malang Mbois City Tour!' }
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Ganti 3000 dengan durasi yang diinginkan dalam milidetik
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
