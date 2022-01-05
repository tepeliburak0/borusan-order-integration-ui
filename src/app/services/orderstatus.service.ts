import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderStatus } from '../models/orderStatus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderstatusService {
  apiUrl="http://localhost:31449/api/OrderStatus/getall";
  constructor(private httpClient:HttpClient) { }

  getOrdersStatus():Observable<OrderStatus[]>{
    return this.httpClient.get<OrderStatus[]>(this.apiUrl);
  }
}
