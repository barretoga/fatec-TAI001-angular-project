import { Component } from '@angular/core';
import { BreadcrumbItem } from 'src/app/template/breadcrumb/breadcrumb.model';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/model/IProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productListBreadcrumbs: BreadcrumbItem = {
    activeItem: "Listar",
    items: [
      {
        name: "Produtos",
        link: "/products",
      }
    ]
  }

  products: IProduct[] = []

  constructor(private productService: ProductsService, private router: Router) {}
  
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id: number | undefined): void {
    if (id) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.getData();
      })
    }
  }

  updateProduct(product: IProduct): void {
    this.router.navigate(['/product/update', product.id]);
  }
}
