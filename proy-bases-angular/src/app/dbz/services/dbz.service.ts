import { Injectable } from '@angular/core';
import type { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 14000 },
    { id: uuid(), name: 'Gohan', power: 10000 },
    { id: uuid(), name: 'Piccolo', power: 9000 },
    { id: uuid(), name: 'Trunks', power: 12000 },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }
  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id);
  }
}
