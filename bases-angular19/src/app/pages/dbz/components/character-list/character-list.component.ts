import {
  Component,
  computed,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  imports: [CommonModule],
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();

  public characterList = signal<Character[]>([
    { id: uuid(), name: 'Goku', power: 10000 },
  ]);

  computedSignal = computed(() => {
    return 'computed ';
  });

  @Output()
  onDeleteIdEvent: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    this.onDeleteIdEvent.emit(id);
  }
}
