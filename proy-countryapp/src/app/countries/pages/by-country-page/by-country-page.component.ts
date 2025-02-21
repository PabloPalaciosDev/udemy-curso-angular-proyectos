import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { CountriesService } from '../../services/countries.service';
import type { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  searchByName(name: string): void {
    this.countryService.searchByNames(name).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
