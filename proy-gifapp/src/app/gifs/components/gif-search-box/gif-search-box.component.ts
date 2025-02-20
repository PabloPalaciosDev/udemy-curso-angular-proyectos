import { Component, ViewChild } from '@angular/core';
import type { ElementRef } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-gif-search-box',
  standalone: false,
  template: `
    <div class="gif-search-box">
      <input
        #txtTagInput
        type="text"
        placeholder="Search for GIFs"
        (keyup.enter)="searchTag()"
      />
    </div>
  `,
  styleUrl: './gif-search-box.component.css',
})
export class GifSearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}

  searchTag() {
    const tagInput = this.tagInput.nativeElement.value;
    this.gifService.searchTag(tagInput);

    this.tagInput.nativeElement.value = '';
  }
}
