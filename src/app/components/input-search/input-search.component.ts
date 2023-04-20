import { Component, EventEmitter, Output, Input, OnChanges, HostListener} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnChanges{
  @HostListener('document:keydown.enter', ['$event'])
  @Output() words: EventEmitter<string> = new EventEmitter();
  @Input() isLoading:boolean=false;
  @Input() hasButton:boolean=true;
  searchValueInput!: string | null;

  
  ngOnChanges(){
    this.isLoading;
  }
  valueInputData(){
    if(this.searchValueInput!=null&&this.searchValueInput.length>2&&!this.hasButton)this.words.emit(this.searchValueInput);
  }
  onGetWords(): void {
    if(this.searchValueInput!=null)this.words.emit(this.searchValueInput);
  }
  onKeyDown(event: KeyboardEvent) {
    console.log(event);
    if(this.searchValueInput!=null)this.words.emit(this.searchValueInput);
  }

}
