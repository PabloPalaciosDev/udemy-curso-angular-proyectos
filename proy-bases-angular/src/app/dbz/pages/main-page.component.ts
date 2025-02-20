import { Component } from '@angular/core';
import type { Character } from '../interfaces/character.interface';
// biome-ignore lint/style/useImportType: <explanation>
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}


  get getCharacters(): Character[] {
    return [...this.dbzService.characters];
  }

  addCharacter( character: Character ): void {
    this.dbzService.onNewCharacter( character );
  }

  deleteCharacter( id: string ): void {
    this.dbzService.onDeleteCharacter( id );
  }
}
