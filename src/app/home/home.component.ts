import { Component } from '@angular/core';
import { Section1HomeComponent } from '../section1-home/section1-home.component';
import { Section2HomeComponent } from '../section2-home/section2-home.component';
import { Section3HomeComponent } from '../section3-home/section3-home.component';
import { Section4HomeComponent } from '../section4-home/section4-home.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, Section1HomeComponent, Section2HomeComponent, Section3HomeComponent, Section4HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private baseUrl = 'https://api-berita-indonesia.vercel.app/cnn/'; 

  constructor(private http: HttpClient){}

}
