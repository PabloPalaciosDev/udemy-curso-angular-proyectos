import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ counter }}</h2>

    <button (click)="increseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>

    <h2 class="message">Mensaje: {{ message }}</h2>
  `,
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public title = 'Contador';
  public counter = 0;
  public message = '';

  increseBy(): void {
    this.counter += 1;

    this.message = 'El contador crecio en 1';
  }

  decreaseBy(): void {
    this.counter -= 1;
    this.message = 'El contadro decrecio en 1';
  }
}
