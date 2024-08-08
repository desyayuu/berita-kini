import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-section1.component.html',
  styleUrls: ['./carousel-section1.component.css']
})
export class CarouselSection1Component implements OnInit {
  items = [
    { title: 'Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi',
      description: 'Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.',
      date: '08 Agustus 2024',
      imageUrl: 'https://lh7-us.googleusercontent.com/aFBOnmLNs8sMYj2FrGFZ80j40ZmN_oNGzkpoHob8TNSPTN64zpNu7r88myxJQZ_qOSfyDR8jS5EoWnwuP9_FD4xe3VrPJDPIrtHt55csI3F1vb0Hh9XRdEYl9fyPOZOW54jRan59zWryX6w59A8t0Dg'
    },
    { title: '2 Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi',
      description: '2Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.',
      date: '08 Agustus 2024',
      imageUrl: 'https://lh7-us.googleusercontent.com/aFBOnmLNs8sMYj2FrGFZ80j40ZmN_oNGzkpoHob8TNSPTN64zpNu7r88myxJQZ_qOSfyDR8jS5EoWnwuP9_FD4xe3VrPJDPIrtHt55csI3F1vb0Hh9XRdEYl9fyPOZOW54jRan59zWryX6w59A8t0Dg'
    },
    { 
      title: '3Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi',
      description: '3Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.',
      date: '08 Agustus 2024',
      imageUrl: 'https://lh7-us.googleusercontent.com/aFBOnmLNs8sMYj2FrGFZ80j40ZmN_oNGzkpoHob8TNSPTN64zpNu7r88myxJQZ_qOSfyDR8jS5EoWnwuP9_FD4xe3VrPJDPIrtHt55csI3F1vb0Hh9XRdEYl9fyPOZOW54jRan59zWryX6w59A8t0Dg'
    }
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