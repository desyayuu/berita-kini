import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSection1Component } from './carousel-section1.component';

describe('CarouselSection1Component', () => {
  let component: CarouselSection1Component;
  let fixture: ComponentFixture<CarouselSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
