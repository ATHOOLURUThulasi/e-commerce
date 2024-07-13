import { Component } from '@angular/core';
import { AllproductsService } from '../allproducts.service';
import { Router } from '@angular/router';
import { Product } from '../allproducts.service';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrl: './product3.component.css'
})
export class Product3Component {
  b:Product[]=[]
  constructor(private er:AllproductsService,private ord:Router){
           this.b=this.er.men
     
  }
  add(data:number){
    let v: any = this.er.a.find((e:any)=> e.id === data); 

    let details = localStorage.getItem(this.er.email);
    let details1 = details ? JSON.parse(details) : { cart: [], orders: [] ,total:{}};
    
   
    let existingItem = details1.cart.find((item:any) => item.id === v.id);
    
    if (existingItem) {
      alert('Item is already added to cart.');
    } else {
   
      details1.cart.push(v);
      details1.total[v.id]=1
      alert('Item added to cart successfully.');
    
    
      localStorage.setItem(this.er.email, JSON.stringify(details1));
    }
   }
   order(data:number){
    this.ord.navigate(['/buy',data])
   }

 

}
