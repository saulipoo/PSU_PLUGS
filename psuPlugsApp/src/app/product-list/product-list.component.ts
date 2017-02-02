import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {
	errorMessage: string;
	productList: Product[];

  constructor(private productListService: ProductListService) { }

  ngOnInit() {
  	this.getProductList();
  }

  getProductList(){
  	this.productListService.getProductList()
  							.subscribe(
  								products => this.productList = products,
  								error =>  this.errorMessage = <any>error);
  }

}
