import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-section1.component.html',
  styleUrls: ['./carousel-section1.component.css']
})
export class CarouselSection1Component implements OnInit, OnDestroy {
  items: any[] = [];
  currentIndex = 0;
  intervalId: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchItems();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  fetchItems() {
    const apiUrl = 'https://api-berita-indonesia.vercel.app/cnn/terbaru';
    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('API Response:', response);
      if (response.success && response.data && response.data.posts) {
        this.items = response.data.posts.slice(0, 5).map((post: any) => ({
          link: post.link, 
          title: post.title,
          description: post.description,
          date: this.formatDate(post.pubDate),
          imageUrl: post.thumbnail
        }));
      } else {
        console.error('Data not found');
      }
    }, error => {
      console.error('Error fetching data', error);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    return formatter.format(date);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    if (this.items.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
  }
  
  prevSlide() {
    if (this.items.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }

  navigateToDetail(link: string) {
    this.router.navigate(['/detailberita'], { queryParams: { link } });
  }
}
