import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient  // Inyectamos el servicio HttpClient
  ) {}

  // Añadir un producto al carrito
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Obtener los productos del carrito
  getItems() {
    return this.items;
  }

  // Limpiar el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Obtener los precios de envío desde shipping.json
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
