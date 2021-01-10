import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment.local';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-cart';
  isAuthenticated: boolean;

  constructor(public http: HttpClient) {}

  private async appRequest(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  ngOnInit() {}

  cart() {
    return this.appRequest('POST', `${environment.apiUrl}/user`);
  }
}
