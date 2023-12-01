import { Component } from '@angular/core';
import { IClient } from 'src/app/model/IClient.model';
import { BreadcrumbItem } from 'src/app/template/breadcrumb/breadcrumb.model';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent {
  productListBreadcrumbs: BreadcrumbItem = {
    activeItem: "Listar",
    items: [
      {
        name: "Clientes",
        link: "/client",
      }
    ]
  }

  clients: IClient[] = []

  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    })
  }

  deleteClient(id: number | undefined): void {
    if (id) {
      this.clientService.deleteClient(id).subscribe(() => {
        this.getData();
      })
    }
  }

  updateClient(client: IClient): void {
    this.router.navigate(['/client/update', client.id]);
  }
}
