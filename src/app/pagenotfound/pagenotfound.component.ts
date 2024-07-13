import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent {
  constructor(private route:Router){
    
  }
  onButtonClick(){
     this.route.navigate([''])
  }
} 
