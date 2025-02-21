import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { CharacterFormComponent } from '../components/character-form/character-form.component';
import { DragonballService } from '../services/dbz.service';

@Component({
  templateUrl: './main-page.component.html',
  selector: 'app-dbz-main-page',
  imports: [CharacterListComponent, CharacterFormComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
