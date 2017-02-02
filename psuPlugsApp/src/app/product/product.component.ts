import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../product-list/product-list.service';

import { Variant } from '../variant';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductListService]
})
export class ProductComponent implements OnInit {
	id: number;
	vars: Variant[];
	products: Product[];
	errorMessage: string;

  constructor(private route: ActivatedRoute, private service: ProductListService) { }

  ngOnInit() {
  	let id = +this.route.snapshot.params['id'];

  	this.service.getProduct(id)
  							.subscribe(
  								product => this.products = product,
  								error =>  this.errorMessage = <any>error);

    this.service.getVariants(id)
  							.subscribe(
  								vars => this.vars = vars,
  								error =>  this.errorMessage = <any>error);
  }

}
