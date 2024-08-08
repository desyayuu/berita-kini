import { Component, OnInit } from '@angular/core';
import { CardSection3Component } from '../card-section3/card-section3.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type PaginationItem = number | 'ellipsis';

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
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedItems();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  get totalPagesArray(): PaginationItem[] {
    const pages: PaginationItem[] = [];
    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2);
      if (this.currentPage > 4) {
        pages.push('ellipsis');
      }
      if (this.currentPage > 3 && this.currentPage < this.totalPages - 2) {
        pages.push(this.currentPage - 1, this.currentPage, this.currentPage + 1);
      } else if (this.currentPage <= 3) {
        pages.push(3, 4);
      }
      if (this.currentPage < this.totalPages - 3) {
        pages.push('ellipsis');
      }
      pages.push(this.totalPages - 1, this.totalPages);
    }
    return pages;
  }

  getShowingStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getShowingEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.items.length);
  }
}
