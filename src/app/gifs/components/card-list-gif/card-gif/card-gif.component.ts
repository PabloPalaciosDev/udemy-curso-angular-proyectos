// biome-ignore lint/style/useImportType: <explanation>
import { Component, Input, OnInit } from '@angular/core';
import type { Gif } from '../../../interfaces/search-gif';

@Component({
  selector: 'app-card-gif',
  standalone: false,
  templateUrl: './card-gif.component.html',
})
export class CardGifComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif is required');
    }
  }
}
