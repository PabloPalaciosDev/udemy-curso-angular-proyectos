import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { CountriesService } from '../../services/countries.service';
import type { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  searchByCapital(capital: string): void {
    this.countryService.searchByCapital(capital).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
