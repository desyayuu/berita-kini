import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailBeritaComponent } from './detail-berita/detail-berita.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent}, 
    {'path': 'detailberita', component: DetailBeritaComponent}
];
