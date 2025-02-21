import { Component, input } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  imports: [CommonModule],
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();

  onDelete = input.required<(id: string) => void>();

  deleteCharacter(id: string) {
    if (this.onDelete) {
      this.onDelete()(id); // Ejecuta el método del servicio
    }
  }
}
