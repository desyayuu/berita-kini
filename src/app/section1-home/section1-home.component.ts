import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSection1Component } from '../carousel-section1/carousel-section1.component';

@Component({
  selector: 'app-section1-home',
  standalone: true,
  imports: [CommonModule, CarouselSection1Component],
  templateUrl: './section1-home.component.html',
  styleUrl: './section1-home.component.css'
})
export class Section1HomeComponent{

}
