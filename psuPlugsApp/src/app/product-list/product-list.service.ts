import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../product';
import { Variant } from '../variant';

@Injectable()
export class ProductListService {
	private getProductsUrl = "http://localhost:3000/api/getProducts";
	private getProductUrl = "http://localhost:3000/api/getProduct/";
	private getVariantsUrl = "http://localhost:3000/api/getVariants/";
	
	constructor(private http: Http) { }

	getProductList(): Observable<Product[]>{
		return this.http.get(this.getProductsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	getProduct(id: Number): Observable<Product[]>{
		return this.http.get(this.getProductUrl + id)
						.map(this.extractData)
						.catch(this.handleError);
	}

	getVariants(id: Number): Observable<Variant[]>{
		return this.http.get(this.getVariantsUrl + id)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response){
		let body = res.json();
		console.log(res.json());
		return body || { };
	}

	private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
