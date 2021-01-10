export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id,
    name,
    description = '',
    price = 0,
    imageUrl = 'https://kali.training/wp-content/uploads/2017/06/kali-linux-revealed-book-mock-3.png'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
