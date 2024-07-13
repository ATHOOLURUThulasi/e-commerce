import { Component } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { Router, Routes } from '@angular/router';
import { Product } from '../allproducts.service';


@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component{
   b:Product[]=[]
   d:number=1
constructor(private ser1:AllproductsService,private ord:Router){

     this.b=this.ser1.electronics
   
  }
  add(data:number){
    let v: any = this.ser1.a.find((e:any)=> e.id === data); 
    let details = localStorage.getItem(this.ser1.email);
    let details1 = details ? JSON.parse(details) : { cart: [], orders: [],total:{}};
    
    let existingItem = details1.cart.find((item:any) => item.id === v.id);
    
    if (existingItem) {
      alert('Item is already added to cart.');
    } else {
      
      details1.cart.push(v);
      details1.total[v.id]=1
       alert('Item added to cart successfully.');
    
      localStorage.setItem(this.ser1.email, JSON.stringify(details1));
    }
  }    
  order(data:number){
    this.ord.navigate(['/buy',data])

  }


}
