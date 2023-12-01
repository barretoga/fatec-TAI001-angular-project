import { Component, Input } from '@angular/core';
import { IClientAddress } from 'src/app/model/IClient.model';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent {
  @Input() id?: number
  @Input() name?: string
  @Input() email?: string
  @Input() phone?: string
  @Input() address?: IClientAddress

  constructor(private clientService: ClientsService, private router: Router) {}

  deleteClient(id: number | undefined): void {
    if (id) {
      this.clientService.deleteClient(id).subscribe(() => {
        this.router.navigate(['/client']);})
    }
  }
}
