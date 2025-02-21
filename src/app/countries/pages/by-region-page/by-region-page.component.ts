import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { CountriesService } from '../../services/countries.service';
import type { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}
  searchByRegion(region: string): void {
    this.countryService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
