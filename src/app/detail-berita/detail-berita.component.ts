import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-detail-berita',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './detail-berita.component.html',
  styleUrls: ['./detail-berita.component.css']
})
export class DetailBeritaComponent implements OnInit {
  berita: { title?: string, description?: string, date?: string, imageUrl?: string } = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const link = params['link'];
      if (link) {
        this.fetchBerita(link);
      }
    });
  }

  fetchBerita(link: string) {
    const apiUrl = `https://api-berita-indonesia.vercel.app/cnn/terbaru?link=${encodeURIComponent(link)}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('API Response:', response);
      if (response.success && response.data && response.data.posts) {
        const article = response.data.posts.find((post: any) => post.link === link);
        if (article) {
          this.berita = {
            title: article.title,
            description: article.description,
            date: this.formatDate(article.pubDate),
            imageUrl: article.thumbnail
          };
        } else {
          console.error('Article not found');
        }
      } else {
        console.error('Data or posts not found');
      }
    }, error => {
      console.error('Error fetching data', error);
    });
  }

  formatDate(pubDate: string): string {
    const date = new Date(pubDate);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('id-ID', options);
  }
}
