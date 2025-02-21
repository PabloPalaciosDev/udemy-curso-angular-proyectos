import { Component, Input } from '@angular/core';
import type { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './table-countries.component.html',
  styles: [
    `
      img {
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class CountriesTableComponent {
  @Input()
  public countries: Country[] = [];
}
