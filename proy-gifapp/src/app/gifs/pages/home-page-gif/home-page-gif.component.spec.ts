import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageGifComponent } from './home-page-gif.component';

describe('HomePageGifComponent', () => {
  let component: HomePageGifComponent;
  let fixture: ComponentFixture<HomePageGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageGifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
