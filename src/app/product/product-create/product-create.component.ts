import { Component } from '@angular/core';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    price: 0,
    due_at: ''
  }

  create() {
    console.log('Novo produto criado', this.product)
  }
}
