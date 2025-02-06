// src/app/product-details/product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

import { Product, products } from '../products';  // Importar la interfaz y productos
import { CartService } from '../cart.service';  // Importar el servicio del carrito

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],  // Incluye CommonModule aquí para que se pueda usar *ngIf, etc.
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,  // Para manejar los parámetros de la ruta
    private cartService: CartService  // Inyectamos el servicio de carrito
  ) { }

  ngOnInit(): void {
    // Obtener el id del producto desde los parámetros de la ruta
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));  // Convertir el id a número

    // Buscar el producto con el id correspondiente en el arreglo de productos
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // Método para añadir el producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);  // Usamos el servicio para añadir el producto
    window.alert(`${product.name} added to the cart!`);  // Mostrar un mensaje de éxito
  }
}
