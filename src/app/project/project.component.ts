import { Component, DoCheck } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements DoCheck{
  b: boolean = true;
  count:number=0
  ordercount:number=0
constructor(private ser: AllproductsService, private router: Router) {
   this.count=this.ser.count
  //  console.log("serv",this.count)
   this.ordercount=this.ser.ordercount
    }
    sub() {
    this.b = false;

  }
  ngDoCheck(): void {
    let d1=localStorage.getItem(this.ser.email)
    let d2=(d1)?JSON.parse(d1):{cart:[],orders:[],total:{}}
    if(d2){
      this.count=d2.cart.length
      this.ordercount=d2.orders.length
      console.log(this.ser.count)
    }
  }
  
}
