import { Component } from '@angular/core';
import { BreadcrumbItem } from 'src/app/template/breadcrumb/breadcrumb.model';
import { Product } from './product.model';

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
  products: Product[] = [
    {
      name: "X-Tudo",
      price: 39.90,
      due_at: new Date().toLocaleDateString(),
    },
    {
      name: "X-Salada",
      price: 25.90,
      due_at: new Date().toLocaleDateString(),
    },
  ]
}
