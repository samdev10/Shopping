import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PriceFilterService {
  subject = new Subject();
  constructor() {}

  sendMessage(priceRange: any) {
    this.subject.next(priceRange); // Triggering an event
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
