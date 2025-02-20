import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { GifService } from '../../services/gif.service';
import type { Gif } from '../../interfaces/search-gif';

@Component({
  selector: 'app-home-page-gif',
  standalone: false,
  templateUrl: './home-page-gif.component.html',
  styleUrl: './home-page-gif.component.css'
})
export class HomePageGifComponent {

  constructor(private gifService:  GifService) { }

  get gif(): Gif[]{
    return this.gifService.gifList;
  }
}
