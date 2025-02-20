import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
   public heroNames: string[] = ['Superman', 'Batman', 'Hulk', 'Ironman', 'Spiderman'];

   public heroeDeleted?: string;

   deleteLastHero():void {
      this.heroeDeleted = this.heroNames.pop();

   }
}
