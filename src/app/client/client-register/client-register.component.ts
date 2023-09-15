import { Component } from '@angular/core';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent {
  client: any = {
    name: '',
    email: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: ''
    },
    phone: '',
    password: '',
  };

  register() {
    console.log('Cliente cadastrado:', this.client);
  }
}
