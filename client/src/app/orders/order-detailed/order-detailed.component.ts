import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order!: IOrder;

  constructor(private ordersService: OrdersService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@OrderDetailed', '');
  }

  ngOnInit(): void {
    this.getOrder(+this.route.snapshot.paramMap.get('id')!);
  }

  getOrder(id: number) {
    this.ordersService.getOrderDetailed(id).subscribe({
      next: response => {
        this.order = response;
        this.breadcrumbService.set('@OrderDetailed', `Order # ${this.order.id} - ${this.order.status}`);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
