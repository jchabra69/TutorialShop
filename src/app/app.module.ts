import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; // Importamos el componente standalone
import { CartComponent } from './cart/cart.component'; // Importamos el CartComponent

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([  // Configuramos las rutas
      { path: '', component: ProductListComponent },  // Ruta para la lista de productos
      { path: 'products/:productId', component: ProductDetailsComponent }, // Ruta para ver los detalles de un producto
      { path: 'cart', component: CartComponent }, // Ruta para el carrito
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    CartComponent,  // Declaramos CartComponent
  ],
  bootstrap: [AppComponent]  // Componente que inicializa la aplicación
})
export class AppModule { }
