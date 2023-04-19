import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  @Output() words: EventEmitter<string> = new EventEmitter();
  searchValueInput!: string | null;


  onGetWords(): void {
    if(this.searchValueInput!=null)this.words.emit(this.searchValueInput);
  }

}
