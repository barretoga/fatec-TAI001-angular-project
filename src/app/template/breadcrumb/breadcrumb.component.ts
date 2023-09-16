import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from './breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() breadcrumbItems: BreadcrumbItem = {
    activeItem: "",
    items: [],
  }
}
