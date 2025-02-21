// biome-ignore lint/style/useImportType: <explanation>
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page/counter-page.component';
import { MainPageComponent } from './pages/dbz/pages/main-page.component';

export const routes: Routes = [
  { path: '', component: CounterPageComponent },
  { path: 'dragon', component: MainPageComponent },
];
