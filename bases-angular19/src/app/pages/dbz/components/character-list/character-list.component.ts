import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  imports: [CommonModule],
})
export class CharacterListComponent {
  @Input()
  public characterList: Character[] = [
    { id: uuid(), name: 'Goku', power: 10000 },
  ];

  @Output()
  onDeleteIdEvent: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    this.onDeleteIdEvent.emit(id);
  }
}
