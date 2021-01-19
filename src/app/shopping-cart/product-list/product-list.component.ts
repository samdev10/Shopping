import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getMockResponse().forEach((product) => {
      this.productList.push(
        new Product(
          product.id,
          product.name,
          product.description,
          product.price
        )
      );
    });
  }

  getMockResponse(): Product[] {
    return [
      new Product(1, 'Java Programmer', 'Core Java', 20),
      new Product(2, 'Javascript', 'Javascript', 30),
      new Product(3, 'Design Patterns', 'Design Patterns', 40),
      new Product(4, 'React Js', 'React Js', 50),
      new Product(5, 'Angular', 'Angular', 60),
      new Product(6, 'Spring Framework', 'Spring Framework', 70),
      new Product(7, 'Docker', 'Docker', 20),
      new Product(8, 'Mysql', 'Mysql', 20),
    ];
  }
}
