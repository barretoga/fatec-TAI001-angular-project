import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IClient } from 'src/app/model/IClient.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {
  client: IClient = {
    name: '',
    email: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zip_code: '',
    },
    phone: '',
  };

  constructor(private clientService: ClientsService, private router: Router) {}

  getData() {
    const id = Number(this.router.url.split('/')[3]);
    this.clientService.getClient(id).subscribe(client => {
      this.client = client;
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  edit() {
    if (this.validateClient()) {
      this.clientService.updateClient(this.client).subscribe(() => {
        this.router.navigate(['/client']);
      });
    } else {
      console.error('Preencha todos os campos obrigatórios');
    }
  }

  private validateClient(): boolean {
    return (
      this.client.name.trim() !== '' &&
      this.client.email.trim() !== '' &&
      this.client.address.street.trim() !== '' &&
      this.client.address.number.trim() !== '' &&
      this.client.address.neighborhood.trim() !== '' &&
      this.client.address.city.trim() !== '' &&
      this.client.address.state.trim() !== '' &&
      this.client.phone.trim() !== ''
    );
  }
}
