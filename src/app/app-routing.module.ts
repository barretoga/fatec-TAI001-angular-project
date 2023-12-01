import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegisterComponent } from './client/client-register/client-register.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'client/register', component: ClientRegisterComponent },
  { path: 'client', component: ClientListComponent },
  { path: 'client/update/:id', component: ClientEditComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/update/:id', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
