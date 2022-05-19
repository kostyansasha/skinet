import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() subtotal: number = 0;
  @Input() shipping: number = 0;
  @Input() total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
