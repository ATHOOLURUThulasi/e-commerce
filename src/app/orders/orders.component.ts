import { Component } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { JsonPipe } from '@angular/common';
export interface Order {
  customerName: string;
  orderDate: Date;
  paymentMode: string;
  image: string;
  quantity: number;
  price: number;
  total: number;
  id: number;
  deliveredDate: Date;
  base:number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  products: Order[]=[];
  b: boolean = true;

  constructor(private er: AllproductsService) {
    let d;
    let c=0
    let productsString = localStorage.getItem(this.er.email);
    let products = productsString ? JSON.parse(productsString) : [];
    if (products.orders.length>0) {
      d= products.orders;
      for(let i=0;i<d.length;i++){
        c=c+1
        d[i]['base']=c
      }
      products={
        cart:products.cart,
      orders:d,
      total:products.total
      }

      this.products=d
      console.log('dgg',this.products)
      localStorage.setItem(this.er.email,JSON.stringify(products))
      
      this.b = false;
    } else {
      this.b = true;
    }
  }

  cancel(data:number) {
    let productsString = localStorage.getItem(this.er.email);
    let products = productsString ? JSON.parse(productsString) : { cart: [], orders: [], total: {} };

    if (products) {
      let updatedOrders = products.orders ? products.orders.filter((order: any) => order.base !== data) : [];

      this.products = updatedOrders;

      let updatedProducts = {
        cart: products.cart,
        orders: updatedOrders,
        total: products.total
      };

      localStorage.setItem(this.er.email, JSON.stringify(updatedProducts));
    }

    if (this.products.length == 0) {
      this.b = true;
    }
  }
}
