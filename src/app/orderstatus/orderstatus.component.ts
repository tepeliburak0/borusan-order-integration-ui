import { Component, OnInit,Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderStatus } from '../models/orderStatus';
import { OrderstatusService } from '../services/orderstatus.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private orderService:OrderstatusService) { }

  orderStatus:OrderStatus[]=[];

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrdersStatus().subscribe(response=>{
      this.orderStatus=response
    })
  }
}
