import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { GifService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'app-shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public tagHistory = '';
  public tagList: string[] = [];

  constructor(private gifService: GifService) {}

  public deleteHistory(): void {
    //borramos el localsotrage
    localStorage.removeItem('tagHistory');
    //recargamos la pagina
    location.reload();
  }


  get tags(): string[] {
    return this.gifService.tagHistory;
  }

  public searchGif(tag: string): void {
    this.gifService.searchTag(tag);
  }

}
