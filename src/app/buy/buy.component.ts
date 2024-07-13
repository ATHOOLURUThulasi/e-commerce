import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllproductsService } from '../allproducts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../allproducts.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyerInfoForm: FormGroup;
  paymentModeForm: FormGroup;
  Amount = 0;
  var: number;
  quantity = 1;
  vars = 0;
  price = 1;
  product:Product;
  date: Date;

  constructor(
    private _formBuilder: FormBuilder,
    private ser: AllproductsService,
    private params: ActivatedRoute,
    private route:Router
  ) {
    this.date = new Date();
    this.Amount = this.ser.amount;
    console.log('yy', this.Amount);
    this.buyerInfoForm = this._formBuilder.group({
      name: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      phone:['1234567890',Validators.required],
      address: ['anathapur', Validators.required],

  
    });

    this.paymentModeForm = this._formBuilder.group({
      payment: ['',Validators.required]
    });

   
  }

  ngOnInit(): void {
    this.params.paramMap.subscribe((data) => {
      this.var = Number(data.get('id'));
      let data1: any = this.ser.a.find((e:any) => e.id == this.var);
      this.product = data1;
      this.vars = this.vars + data1.price;
    });
  }

  placeOrder(): void {
    let newOrder = {
      customerName: this.buyerInfoForm.value.name,
      orderDate: this.date,
      paymentMode: this.paymentModeForm.value.payment,
      image: this.product.image,  
      quantity: this.quantity,
      price:this.product.price,
      total:this.quantity*this.product.price,
      id:this.product.id,
      deliveredDate: new Date(this.date.getTime() + (this.var * 24 * 60 * 60 * 1000))
    
    }
   let a1= localStorage.getItem(this.ser.email)
   let a2=(a1)?JSON.parse(a1):{cart:[],orders:[]}
   if(a2){
    a2.orders.push(newOrder)
    localStorage.setItem(this.ser.email,JSON.stringify(a2))

   }
   alert('order is confirmed')

  }

  goToNextStep(stepper: any): void {
    stepper.next();
  }

  goToPreviousStep(stepper: any): void {
    stepper.previous();
  }

  add(): void {
    this.quantity += 1;
    this.vars = this.vars + this.price;
  }

  remove(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.vars = this.vars - this.price;
    }
  }
  goToHomePage(){
     this.route.navigate(['\home'])
  }
}
