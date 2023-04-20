import { Component, EventEmitter, Output, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnChanges{
  @Output() words: EventEmitter<string> = new EventEmitter();
  @Input() isLoading:boolean=false;
  searchValueInput!: string | null;

  
  ngOnChanges(){
    this.isLoading;
  }
  onGetWords(): void {
    if(this.searchValueInput!=null)this.words.emit(this.searchValueInput);
  }

}
