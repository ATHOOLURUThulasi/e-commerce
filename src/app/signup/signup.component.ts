import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name:string;
  email:string;
  word:string;
  constructor(private router: Router) {
    if(!localStorage.getItem('credentials'))
    localStorage.setItem('credentials',JSON.stringify([]))
   }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required, Validators.pattern('[A-Z]+\\s[A-Z]+')]);
  password = new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()]).{5,}")]);
  signin() {
    if (this.emailFormControl.valid && this.password.valid) {

      let newUser = {
        email: this.emailFormControl.value,
        password: this.password.value
      };
  
      let a = localStorage.getItem('credentials');
      let details = (a) ? JSON.parse(a) : []
      let c=0
      for(let i=0;i<details.length;i++){
         if(details[i].email==newUser.email)
          c=c+1
      }
      if(c==0){
      details.push(newUser)
      alert('sign in successfull')
      this.router.navigate(['/login'])
      }
      else{
        alert('already signin please login')
        this.email=''
        this.name=''
        this.word=''
      }
      localStorage.setItem('credentials', JSON.stringify(details));
  
    }
  }
  
  login() {
   this.router.navigate(['/login']);
  }
}
