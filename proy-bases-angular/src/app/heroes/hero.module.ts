import { NgModule } from "@angular/core";
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListaComponent } from "./components/lista/lista.component";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroComponent,
    ListaComponent
  ],
  exports: [
    HeroComponent,
    ListaComponent
  ]
})
export class HeroModule {
}
