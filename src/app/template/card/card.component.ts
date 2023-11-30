import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id?: string
  @Input() name?: string
  @Input() image?: string
  @Input() quantity?: number
  @Input() price?: number
  @Input() description?: string
  @Input() due_at?: string | Date
}
