export class CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;

  constructor(productId, productName, quantity, price) {
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
  }
}
