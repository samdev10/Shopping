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
  dispayItemDetails = false;

  constructor(private messengerService: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.messengerService.sendMessage(this.productItem);
  }

  handleViewDetails() {
    this.dispayItemDetails = !this.dispayItemDetails;
  }
}
