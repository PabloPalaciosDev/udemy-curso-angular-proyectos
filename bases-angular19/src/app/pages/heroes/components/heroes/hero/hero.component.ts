import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name = 'Windstorm';
  public age = 25;
  public power = 'Weather control';
  public alterEgo = 'Jane Doe';


  public changeName(): void {
    this.name = 'Tornado';
  }

  public changeAge(): void {
    this.age = 30;
  }

  public resetForm(): void {
    this.name = 'Windstorm';
    this.age = 25;
    this.power = 'Weather control';
    this.alterEgo = 'Jane Doe';


    //document.getElementsByClassName('content-custom')[0].innerHTML = 'Reset form';
  }
}
