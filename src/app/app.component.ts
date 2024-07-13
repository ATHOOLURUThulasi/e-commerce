import { Component, DoCheck, OnInit } from '@angular/core';
import { AllproductsService } from './allproducts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  // count: number = 0;
  // ordercount: number = 0;

  constructor(private ser: AllproductsService) {
  }
  ngDoCheck(): void {
    console.log('dfdgg')
    // let d1=localStorage.getItem(this.ser.email)
    // let d2=(d1)?JSON.parse(d1):{cart:[],orders:[],total:{}}
    // if(d2){
    //   this.ser.count=d2.cart.length
    //   this.ser.ordercount=d2.orders.length
    //   console.log(this.ser.count)
    // }


  }


 
}
