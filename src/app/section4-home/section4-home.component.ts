import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-section4-home',
  standalone: true,
  imports: [CarouselComponent, CommonModule],
  templateUrl: './section4-home.component.html',
  styleUrl: './section4-home.component.css'
})
export class Section4HomeComponent {

}
