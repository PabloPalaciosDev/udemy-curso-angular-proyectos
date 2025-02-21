import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public title = 'Contador';
  public counter = 0;
  public message = '';

  public counterSignal = signal(10);

  increseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
    this.message = 'El contador crecio en 1';
  }

  decreaseBy(value: number): void {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
    this.message = 'El contadro decrecio en 1';
  }

  reset(): void {
    this.counter = 0;
    this.counterSignal.update((current) => 0);
    this.message = 'El contador se reinicio';
  }
}
