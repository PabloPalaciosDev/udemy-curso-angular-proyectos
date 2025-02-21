import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    CharacterFormComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
