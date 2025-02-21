import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styles: `
    .sidebar {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 768px) {
      .list-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
      }

      .list-group-item {
        flex: 1 1 auto;
        text-align: center;
        min-width: 150px;
      }
    }
  `,
})
export class SideBarComponent {}
