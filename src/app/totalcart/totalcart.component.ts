import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AllproductsService } from '../allproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totalcart',
  templateUrl: './totalcart.component.html',
  styleUrls: ['./totalcart.component.css']
})
export class TotalcartComponent implements OnInit {
  buyerInfoForm: FormGroup;
  paymentModeForm: FormGroup;
  Amount = 0;
  count = 0;
  date = new Date();
  cart: any[] = [];

  constructor(private _formBuilder: FormBuilder, private ser: AllproductsService, private route: Router) {

   
    let a1= localStorage.getItem(this.ser.email)
    let a2=(a1)?JSON.parse(a1):{cart:[],orders:[],total:{}}
    if(a2){
      this.count=a2.cart.length
    }
  this.Amount=this.ser.total

    this.buyerInfoForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      phone: [''],
      address: ['', Validators.required]   
    });

    this.paymentModeForm = this._formBuilder.group({
      payment: ['', Validators.required]  //
    });
  }

  ngOnInit(): void {
  
    let cartData = localStorage.getItem(this.ser.email);
    if (cartData) {
      let parsedData = JSON.parse(cartData);
      this.cart = parsedData.cart 
    } 
  }


  goToNextStep(stepper: any): void {
    stepper.next();
  }


  goToPreviousStep(stepper: any): void {
    stepper.previous();
  }


  placeOrder(): void {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].image) {
        let newproduct = {
          customerName: this.buyerInfoForm.value.name,
          orderDate: this.date,
          paymentMode: this.paymentModeForm.value.payment,
          image: this.cart[i].image,
          quantity: this.ser.products[this.cart[i].id],
          price: this.cart[i].price,
          total: this.cart[i].price * this.ser.products[this.cart[i].id],
          id: this.cart[i].id,
          deliveredDate: new Date(this.date.getTime() + (this.cart[i].id * 24 * 60 * 60 * 1000))
        };


        let localStorageData = localStorage.getItem(this.ser.email);
        let parsedLocalStorageData = localStorageData ? JSON.parse(localStorageData) : { cart: [], orders: [] ,total:{}};
        parsedLocalStorageData.orders.push(newproduct);
        localStorage.setItem(this.ser.email, JSON.stringify(parsedLocalStorageData));
      }
    }
    
    alert('Order is confirmed');
  }

  // Method to navigate back to home page
  goToHomePage(): void {
    this.route.navigate(['/home']);
  }
}
