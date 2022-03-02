import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:5001/api/products')
      .subscribe({
        next: (response: IPagination) => {
          this.products = response.data
        },
        error: (e: Error) => { console.log(e); }
      });
    //.subscribe(
    //  (response: IPagination) => {
    //    this.products = response.data;
    //  }, error => {
    //    console.log(error);
    //  }
    //);
  }
}
