import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter: string;
  @Output() filterEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendFilter = () => {
    this.filterEmitter.emit(this.filter);
  }
}
