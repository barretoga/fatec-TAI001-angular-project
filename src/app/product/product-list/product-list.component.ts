import { Component } from '@angular/core';
import { BreadcrumbItem } from 'src/app/template/breadcrumb/breadcrumb.model';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/model/IProduct.model';

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

  constructor(private productService: ProductsService) {}
  
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }
}
