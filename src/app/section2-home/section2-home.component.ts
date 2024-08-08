// section2-home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section2-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './section2-home.component.html',
  styleUrls: ['./section2-home.component.css']
})
export class Section2HomeComponent implements OnInit {
  cards: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData().subscribe(data => {
      console.log(data);
      if (data && data.data && data.data.posts) {
        this.cards = data.data.posts.slice(0, 3).map((post: any, index: number) => ({
          title: post.title,
          description: post.description,
          imageUrl: post.thumbnail,
          date: this.formatDate(post.pubDate),
          number: index + 1
        }));
      } else {
        console.error('Unexpected API response structure:', data);
      }
    });
  }

  fetchData(): Observable<any> {
    return this.http.get('https://api-berita-indonesia.vercel.app/cnn/teknologi');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  }
}
