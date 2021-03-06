import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PriceFilterService } from 'src/app/services/price-filter.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  priceRange: any = { fromPrice: 0, toPrice: 0 };
  constructor(
    private productService: ProductService,
    private priceFilterService: PriceFilterService
  ) {}

  ngOnInit(): void {
    this.priceFilterService.getMessage().subscribe((priceRange: any) => {
      this.priceRange = priceRange;
      this.productList = this.getMockResponse();
      this.filterByPriceRange(priceRange);
    });
    this.productList = this.getMockResponse();
  }

  private filterByPriceRange(priceRange: any) {
    if (priceRange.fromPrice && priceRange.fromPrice >= 0) {
      this.productList = this.productList.filter(
        (product) => product.price > this.priceRange.fromPrice
      );
    }
    if (priceRange.toPrice && priceRange.toPrice >= 0) {
      this.productList = this.productList.filter(
        (product) => product.price < this.priceRange.toPrice
      );
    }
  }

  getMockResponse(): Product[] {
    return [
      new Product(
        1,
        'Book',
        'Harry Potter and the Half-Blood Prince',
        21,
        '../../assets/images/book2.jpg',
        'Harry Potter and the Half-Blood Prince | Aurthor - J.K. Rowling | Rating 4.57 | Publisher - Scholastic Inc.'
      ),
      new Product(
        2,
        'Book',
        'Harry Potter and the Chamber of Secrets',
        14,
        '../../assets/images/book3.jpg',
        'Harry Potter and the Chamber of Secret | Aurthor - J.K. Rowling | Rating 4.42 | Publisher - Scholastic Inc.'
      ),
      new Product(
        3,
        'Book',
        'The Ultimate Hitchhikers Guide: Five Complete Novels and One Story',
        25,
        '../../assets/images/book2.jpg',
        'The Ultimate Hitchhikers Guide: Five Complete Novels and One Story | Aurthor - Douglas Adams | Rating 4.38 | Publisher - Gramercy Books'
      ),
      new Product(
        4,
        'Book',
        "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
        12,
        '../../assets/images/book3.jpg',
        "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right | Aurthor - Bill Bryson | Rating 4.21 | Publisher - Broadway Books"
      ),
      new Product(
        5,
        'Book',
        'The Lost Continent: Travels in Small Town America',
        29,
        '../../assets/images/book1.jpg',
        'The Lost Continent: Travels in Small Town America | Aurthor - Bill Bryson | Rating 3.83 | Publisher - William Morrow Paperbacks'
      ),
      new Product(
        6,
        'Book',
        'The Changeling Sea',
        20,
        '../../assets/images/book2.jpg',
        'The Changeling Sea | Aurthor - Patricia A. McKillip | Rating 4.06 | Publisher - FireBird'
      ),
      new Product(
        7,
        'Book',
        'Annals of the Former World',
        16,
        '../../assets/images/book3.jpg',
        'Annals of the Former World | Aurthor - John McPhee | Rating 4.34 | Publisher - Farrar  Straus and Giroux'
      ),
      new Product(
        8,
        'Book',
        'The Lord of the Rings: The Art of the Fellowship of the Ring',
        30,
        '../../assets/images/book1.jpg',
        'The Lord of the Rings: The Art of the Fellowship of the Ring | Aurthor - Gary Russell | Rating 4.59 | Publisher - Houghton Mifflin Harcourt'
      ),
      new Product(
        9,
        'Book',
        'The Power of One',
        24,
        '../../assets/images/book1.jpg',
        'The Power of One | Aurthor - Bryce Courtenay | Rating 4.35 | Publisher - Ballantine Books'
      ),
    ];
  }
}
