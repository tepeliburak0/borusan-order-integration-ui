import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/orderservice';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OrderstatusComponent } from '../orderstatus/orderstatus.component';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService,private dialog:MatDialog) { }
  title="Sipariş Listesi"
  orders:Order[]=[];

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe(response=>{
      this.orders=response
    })
  }

  openDialog(){
    // const dialogConfig=new MatDialogConfig();
    // dialogConfig.disableClose=true;
    // dialogConfig.autoFocus=true;
    // dialogConfig.width="60%";
    this.dialog.open(OrderstatusComponent,{data:{name:""}})
  }
  

}
