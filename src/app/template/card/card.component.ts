import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id?: number
  @Input() name?: string
  @Input() image?: string
  @Input() quantity?: number
  @Input() price?: number
  @Input() description?: string
  @Input() due_at?: string | Date

  constructor(private productService: ProductsService, private router: Router) {}

  deleteProduct(id: number | undefined): void {
    if (id) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.router.navigate(['/product']);})
    }
  }
}
