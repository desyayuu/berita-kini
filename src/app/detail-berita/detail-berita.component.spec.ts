import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBeritaComponent } from './detail-berita.component';

describe('DetailBeritaComponent', () => {
  let component: DetailBeritaComponent;
  let fixture: ComponentFixture<DetailBeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBeritaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
