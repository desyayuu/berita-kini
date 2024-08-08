import { Component, OnInit } from '@angular/core';
import { CardSection3Component } from '../card-section3/card-section3.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section3-home',
  standalone: true,
  imports: [CardSection3Component, CommonModule],
  templateUrl: './section3-home.component.html',
  styleUrls: ['./section3-home.component.css']
})
export class Section3HomeComponent implements OnInit {
  items: any[] = [];
  displayedItems: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData().subscribe((data: any) => {
      console.log('API Response:', data); 
      if (data && data.data) {
        this.items = data.data.posts.map((item: any) => ({
          title: item.title,
          imageUrl: item.thumbnail,
          date: new Date(item.pubDate).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        }));
        this.updateDisplayedItems();
      }
    });
  }
  

  fetchData(): Observable<any> {
    return this.http.get('https://api-berita-indonesia.vercel.app/cnn/nasional');
  }

  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedItems = this.items.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedItems();
  }

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
}
