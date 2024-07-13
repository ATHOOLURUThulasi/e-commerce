import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { CmpComponent } from './cmp/cmp.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { PropertybindingNgclassstyleComponent } from './propertybinding-ngclassstyle/propertybinding-ngclassstyle.component';
import { CommunicationComponent } from './communication/communication.component';
import { PracticereactiveformsComponent } from './practicereactiveforms/practicereactiveforms.component'
import {RouterModule, Routes} from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Practice1Component } from './practice1/practice1.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BuyComponent } from './buy/buy.component';
import {MatStepperModule} from '@angular/material/stepper';
// import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { TotalcartComponent } from './totalcart/totalcart.component';
import { OrdersComponent } from './orders/orders.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {CanactivateGuard } from './canactivate.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';







let a:Routes=[{
 path:'home',component:ProjectComponent,canActivate:[CanactivateGuard ],children:[
  {path:'',component:HomeComponent,

  }
  ,
  {
    path:'electronics', component:Product1Component
  },
  {path:'womensclothing',component:Product2Component},
  {path:'mensclothing',component:Product3Component},
  {path:'Jewellery',component:Product4Component},
  {path:'cart',component:CartitemsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'logout',component:LogoutComponent}
 ]
},

{
  path:'buy/:id',component:BuyComponent
},
{path:'totalcart',component:TotalcartComponent},
{path:'', component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'**',component:PagenotfoundComponent}]
@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    CmpComponent,
    Cmp2Component,
    PropertybindingNgclassstyleComponent,
    CommunicationComponent,
    PracticereactiveformsComponent,
      ProjectComponent,
    HomeComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    CartitemsComponent,
    Practice1Component,
    BuyComponent,
    TotalcartComponent,
    OrdersComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    PagenotfoundComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(a),
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
