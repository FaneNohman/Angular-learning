import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categories } from 'src/product';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Output() filter = new EventEmitter;
  constructor() { }
  Categories=Categories;
  ngOnInit(): void {
  }
  filterByCategory(filter:string){
    this.filter.emit(filter);
  }
}
