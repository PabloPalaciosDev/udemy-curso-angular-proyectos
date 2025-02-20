// biome-ignore lint/style/useImportType: <explanation>
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasloaded = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('URL is required');
    }
  }

  onLoad(): void {
    this.hasloaded = true;
  }

}
