import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PriceFilterService } from 'src/app/services/price-filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor(private priceFilterService: PriceFilterService) {}

  ngOnInit(): void {}

  handleFilterByPrice(f: NgForm) {
    this.priceFilterService.sendMessage(f.value);
  }
}
