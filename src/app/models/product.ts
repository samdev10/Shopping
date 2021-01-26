export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  title: string;

  constructor(
    id,
    name,
    title = '',
    price = 0,
    imageUrl = 'https://kali.training/wp-content/uploads/2017/06/kali-linux-revealed-book-mock-3.png',
    description = 'item description'
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
