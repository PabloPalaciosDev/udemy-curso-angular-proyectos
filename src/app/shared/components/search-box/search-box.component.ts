import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input() public placeholder = '';
  @Output() public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
