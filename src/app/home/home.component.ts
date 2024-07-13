import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AllproductsService } from '../allproducts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private ser1:AllproductsService){
  }   
}
