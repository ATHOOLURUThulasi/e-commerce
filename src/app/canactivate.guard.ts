import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AllproductsService } from './allproducts.service';

@Injectable({
  providedIn: 'root' // Ensure AllproductsService is provided at root level or adjust as needed
})
export class CanactivateGuard {
  constructor(private allproductsService: AllproductsService,private route:Router) {}

  canActivate: CanActivateFn = (route, state) => {
    console.log('Checking authentication...');

    // Retrieve credentials from localStorage
    let credentials = localStorage.getItem('credentials');
    let credentialArray = credentials ? JSON.parse(credentials) : [];

    // Access email and password properties from AllproductsService instance
    let email = this.allproductsService.email;
    let password = this.allproductsService.password;

    // Check if the provided credentials match any stored credentials
    for (let i = 0; i < credentialArray.length; i++) {
      if (credentialArray[i].email === email && credentialArray[i].password === password) {
        console.log('Authentication successful!');
        return true; // Allow navigation
      }
    }

    this.route.navigate(['\login'])
    return false; // Prevent navigation
  };
}
