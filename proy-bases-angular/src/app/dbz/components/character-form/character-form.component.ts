import { Component, EventEmitter, Output } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character-form',
  standalone: false,
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css',
})
export class CharacterFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();


  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  onSubmit(): void {


    if (this.character.name.trim().length === 0) {
      return;
    }

    if (this.character.power <= 0) {
      return;
    }

    if(this.character.name.length < 0) {
      return;
    }

    this.onNewCharacter.emit(this.character);
    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }
}
