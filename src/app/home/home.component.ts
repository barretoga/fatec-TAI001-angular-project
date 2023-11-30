import { Component } from '@angular/core';
import { IProduct as ProductCard } from '../model/IProduct.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardItems: ProductCard[] = []

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.productService.getProducts().subscribe(products => {
      this.cardItems = products;
    })
  }
}
