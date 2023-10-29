import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL);
  }
}
