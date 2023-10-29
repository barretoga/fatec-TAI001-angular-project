import { Component } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: IProduct = {
    name: '',
    price: 0,
    due_at: '',
  }

  create() {
    console.log('Novo produto criado', this.product)
  }
}
