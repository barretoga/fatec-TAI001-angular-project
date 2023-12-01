import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/IProduct.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {
    name: '',
    price: 0,
    description: '',
    image: '',
    quantity: 0,
    due_at: '',
  };

  constructor(private productService: ProductsService, private router: Router) {}

  edit() {
    if (this.validateProduct()) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.router.navigate(['/product']);
      });
    } else {
      console.error('Preencha todos os campos obrigatórios');
    }
  }

  getData() {
    const id = Number(this.router.url.split('/')[3]);
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

  ngOnInit(): void {
    this.getData();
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
