import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private REST_API_PRODUCTS = 'http://localhost:3000';
  details:string ='details';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),  
  }

  constructor( private http: HttpClient) {}

  public getProduct(): Observable<Product[]>{
    const url = `${this.REST_API_PRODUCTS}/products`;
    return this.http.get<Product[]>(url, this.httpOptions);

  }

  public getProductById(productId: number): Observable<Product> {
    const url = `${this.REST_API_PRODUCTS}/products/${productId}`;
    console.log('url detail', url)
    return this.http.get<Product>(url, this.httpOptions).pipe(
      catchError(error => {
        console.error('Error getting product by ID:', error);
        return throwError(error);
      })
    );
  }
  myData={
    reportProgress: true,
     observe: 'events',
  }
  public postProduct(): Observable<Product[]>{
    const url = `${this.REST_API_PRODUCTS}/products`;
      return this.http.post<Product[]>(url,this.myData);
  }
  

}
