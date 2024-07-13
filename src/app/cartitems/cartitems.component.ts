import { Component, DoCheck } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { Router } from '@angular/router';
import { Product } from '../allproducts.service';

export interface total{
   [key:number]:number
}


@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements DoCheck {
  c: Product[] = [];
  Amount: number = 0;
  count: number = 0;
  total:total={}
  constructor(private er: AllproductsService, private ord: Router) {
    let localStorageData = localStorage.getItem(this.er.email);
    let cartData = localStorageData ? JSON.parse(localStorageData) : { cart: [], orders: [],total:{} };

    if (cartData) {
      this.c = cartData.cart;
      this.count = this.c.length;
      this.er.count=cartData.cart.length
      this.total=cartData.total
      this.er.products=cartData.total

      this.calculateTotalAmount()
    }
    this.er.total=this.Amount
  }

  ngDoCheck(): void {
    let localStorageData = localStorage.getItem(this.er.email);

    if (localStorageData) {
      let cartData = JSON.parse(localStorageData);
      if (cartData) {
        this.c = cartData.cart;
        this.count = this.c.length;
        this.calculateTotalAmount();
      } else {
        this.c = [];
        this.count = 0;
      }
    } else {
      this.c = [];
      this.count = 0;
    }
  }

  del(data: number) {
    let localStorageData = localStorage.getItem(this.er.email);
    let cartData = localStorageData ? JSON.parse(localStorageData) : { cart: [], orders: [] };

    if (cartData && cartData.cart) {
      cartData.cart = cartData.cart.filter((e: any) => e.id != data);
      localStorage.setItem(this.er.email, JSON.stringify(cartData));
      this.count -= 1;
    }
  }

  fun(quantity: number, itemId: number) {
   let d1= localStorage.getItem(this.er.email)
   let d2=(d1)? JSON.parse(d1):{cart:[],orders:[],total:{}}
   if(d2){
    d2.total[itemId]=Number(quantity)
    this.total=d2.total
    localStorage.setItem(this.er.email,JSON.stringify(d2))
   }
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
  
    this.Amount = 0;
    for (let item of this.c) {
      let product: any = this.er.a.find((e:any) => e.id === item.id);
      console.log('Product found:', product);
  
      if (product && this.total[item.id]) {
        let subtotal = product.price * this.total[item.id];
        console.log('Subtotal for item', item.id, ':', subtotal);
        this.Amount += subtotal;
      }
    }
  
    console.log('Total Amount:', this.Amount);
    this.er.amount = this.Amount;
  }
  
  quantityOptions(): number[] {
    let options: number[] = [];
    for (let i = 1; i <= 3; i++) {
      options.push(i);
    }
    return options;
  }

  sub(data: number) {
    this.ord.navigate(['buy', data]).then(() => {
      console.log('Navigation to buy page successful.');
    }).catch(error => {
      console.error('Error navigating to buy page:', error);
    });
  }

  click() {
    this.ord.navigate(['totalcart'])
  }
}
