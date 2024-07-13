import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { total } from './cartitems/cartitems.component';
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
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
}


@Injectable({
  providedIn: 'root'
})
export class AllproductsService {
  women:Product[]=[];
  men: Product[]=[];
  electronics: Product[]=[];
  jewellery: Product[]=[];
  total:number;
  amount:number=0;
  email:string;
  products:total;
  count=0;
  ordercount=0;
  password:string;
  a:Product[]=[];
 

  
  constructor(private http: HttpClient) {
    this.fetchProducts()
  }


  fetchProducts() {
    this.http.get('https://fakestoreapi.com/products').subscribe(
      (data:any) => {
        if(data){
        this.a=data 
        this.fun1()
        console.log('coming')// Call the service method to populate categories
      }
    }
    );
  }
  fun1() {
    if(this.a){
      console.log('all',this.a)
         for (let i = 0; i < this.a.length; i++) {
      if (this.a[i].category == "men's clothing") {
        this.men.push(this.a[i]);
      } else if (this.a[i].category == "women's clothing") {
        this.women.push(this.a[i]);
      } else if (this.a[i].category == "electronics") {
        this.electronics.push(this.a[i]);
      } else if (this.a[i].category == "jewelery") { // corrected 'jewellery'
        this.jewellery.push(this.a[i]);
      }
    }
  }
  }
}
