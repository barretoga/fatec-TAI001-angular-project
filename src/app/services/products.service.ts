import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.URL, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.URL}/${product.id}`, product);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.URL}/${id}`);
  }
}
