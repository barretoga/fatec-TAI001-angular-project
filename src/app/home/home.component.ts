import { Component } from '@angular/core';
import { IProduct as ProductCard } from '../model/IProduct.model';
import { IClient as ClientCard } from '../model/IClient.model';
import { ProductsService } from '../services/products.service';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardItems: ProductCard[] = []
  clientCardItems: ClientCard[] = []

  constructor(private productService: ProductsService, private clientService: ClientsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.productService.getProducts().subscribe(products => {
      this.cardItems = products;
    })
    this.clientService.getClients().subscribe(clients => {
      this.clientCardItems = clients;
    })
  }
}
