import { Component, OnInit } from '@angular/core';
import { products,Product,Categories} from 'src/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }
  onProductRemove(id:number){
    this.products =this.products.filter(x=>x.id!==id);
  }
  onFilterByCategory(filter:string){
    this.products=products;
    if(filter!==Categories.NO){
    this.products=this.products.filter(x=>x.category===filter);
  }
  }
}