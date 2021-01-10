import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { MessengerService } from '../../../services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private messengerService: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    console.log('hi');
    this.messengerService.sendMessage(this.productItem);
  }
}
