import { Component } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent {
  clients: any[] = [
    {
      name: 'Fulano de Tal',
      email: 'fulanodetal@email.com',
      address: {
        street: 'Rua dos bobos',
        number: '0',
        complement: 'apto 1',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP'
      },
      phone: '(11) 99999-9999',
    },
    {
      name: 'Beltrano da Silva',
      email: 'beltrandasilva@email.com',
      address: {
        street: 'Rua dos bobos',
        number: '0',
        complement: 'apto 2',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP'
      },
      phone: '(11) 99999-9999',
    },
    {
      name: 'Ciclano Souza',
      email: 'ciclanosouza@email.com',
      address: {
        street: 'Rua dos bobos',
        number: '0',
        complement: 'apto 3',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP'
      },
      phone: '(11) 99999-9999',
    }
  ]
}
