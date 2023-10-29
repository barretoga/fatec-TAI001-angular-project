import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './template/card/card.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BreadcrumbComponent } from './template/breadcrumb/breadcrumb.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientRegisterComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ProductCreateComponent,
    ProductListComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
