// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
    });
  }
}
