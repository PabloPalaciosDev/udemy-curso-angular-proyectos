import { Component, Input } from '@angular/core';
import type { Gif } from '../../interfaces/search-gif';

@Component({
  selector: 'app-card-list-gif',
  standalone: false,
  templateUrl: './card-list-gif.component.html',
  styleUrl: './card-list-gif.component.css'
})
export class CardListGifComponent {

  @Input()
  public gifs: Gif[] = [];
}
