import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product';
import { MessengerService } from '../../services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(private messenger: MessengerService) {}

  ngOnInit(): void {
    this.messenger.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push(
        new CartItem(product.id, product.title, 1, product.price)
      );
    }

    this.cartTotal = 0;
    this.cartItems.forEach(
      (item: CartItem) => (this.cartTotal += item.quantity * item.price)
    );
  }
}
