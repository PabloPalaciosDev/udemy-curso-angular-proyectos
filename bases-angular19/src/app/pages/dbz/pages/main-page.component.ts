import { Component } from '@angular/core';
import type { Character } from '../interfaces/character.interface';
// biome-ignore lint/style/useImportType: <explanation>
import { DbzService } from '../services/dbz.service';
import { CharacterFormComponent } from '../components/character-form/character-form.component';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  imports: [
    CharacterFormComponent,
    CharacterListComponent,
    FormsModule,
    CommonModule,
  ],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get getCharacters(): Character[] {
    return [...this.dbzService.characters];
  }

  addCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

  deleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }
}
