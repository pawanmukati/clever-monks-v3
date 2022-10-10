import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProfileCarouselComponent } from './our-profile-carousel.component';

describe('OurProfileCarouselComponent', () => {
  let component: OurProfileCarouselComponent;
  let fixture: ComponentFixture<OurProfileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProfileCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProfileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
