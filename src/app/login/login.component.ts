import { Component, DoCheck } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllproductsService } from '../allproducts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  email:string=''
   word:string=''
  constructor(private route:Router,private ser:AllproductsService) {
     
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // password=new FormControl('',[Validators.required,Validators.pattern("(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[!@#$%^&*()]).{5,}")])
  password = new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()]).{5,}")])
  signup(){
     this.route.navigate([''])
  }
  click(){
  if(this.emailFormControl.value){
   let a=localStorage.getItem('credentials')
   let c=(a)?JSON.parse(a):[]
   let  d=0
   console.log('pallavi')
  for(let i=0;i<c.length;i++){
    if(c[i].email==this.emailFormControl.value && c[i].password==this.password.value){
      this.ser.email=this.email
      this.ser.password=this.word
     d=d+1
    }
  }
  if(d==0){
    alert('please sign in')
    this.email=''
    this.word=''
 

  } 
  else{
  let details = localStorage.getItem(this.email);
  // console.log('dtails',details)
  if (!details) {
    localStorage.setItem(this.email, JSON.stringify({ cart: [], orders: [],total:{} }));
    // console.log('localStorage item:', details);

  }
  let d= localStorage.getItem("quantity");
  
   this.route.navigate(['\home'])
  }

  }
}
  
}
