import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/IProduct.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: IProduct = {
    name: '',
    price: 0,
    description: '',
    image: '',
    quantity: 0,
    due_at: '',
  };

  constructor(private productService: ProductsService, private router: Router) {}

  create() {
    if (this.validateProduct()) {
      this.productService.createProduct(this.product).subscribe(() => {
        this.router.navigate(['/product']);
      });
    } else {
      console.error('Preencha todos os campos obrigatórios');
    }
  }

  private validateProduct(): boolean {
    return (
      this.product.name.trim() !== '' &&
      this.product.price > 0 &&
      this.product.description.trim() !== '' &&
      this.product.image.trim() !== '' &&
      this.product.quantity >= 0
    );
  }
}
