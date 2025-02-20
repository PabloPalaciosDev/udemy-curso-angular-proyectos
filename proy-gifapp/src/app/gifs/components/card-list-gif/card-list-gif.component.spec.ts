import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListGifComponent } from './card-list-gif.component';

describe('CardListGifComponent', () => {
  let component: CardListGifComponent;
  let fixture: ComponentFixture<CardListGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListGifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
