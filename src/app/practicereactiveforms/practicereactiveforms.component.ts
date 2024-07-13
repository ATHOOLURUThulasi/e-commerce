import { Component ,OnInit} from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-practicereactiveforms',
  templateUrl: './practicereactiveforms.component.html',
  styleUrl: './practicereactiveforms.component.css'
})
export class PracticereactiveformsComponent {
//   l:FormGroup;
  // constructor(private http:HttpClient){
  // }
//   // Getter for accessing the FormArray 'g'
//   get g() {
//     return this.l.get('g') as FormArray;
//   }
//   add(){
//     console.log("thulasi")
//    let y= this.l.get('g') as FormArray

//    y.push(new FormControl(''))
//   }
//    del(data:number){
     
//     let y= this.l.get('g') as FormArray
//     y.removeAt(data)
//    }
//   submitForm() {
//     // Logic to handle form submission
//   }
  //  v=new FormGroup({
  //   password:new FormControl('',[Validators.required,this.customvalidation]),
  //   num:new FormControl(null,[this.servervalidations])
  //  })
  //  get vname(){
  //   return this.v
  //  }
  //  get passwor(){
  //   return this.v.get('password')
  //  }
  //  get new(){
  //   return this.v.get('new')
  //  }

  //  customvalidation(password:any){
  //   console.log('pallavi')
  //   let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{5,}$/;
  //   let y=pattern.test(password.value)
  //   console.log(y)
  //   if(y){
       
  //       return null
  //   }
  //   else{
  //       return {patern:true}
  //   }
  //  }
  //  servervalidations(num:any){
  //   let s:any;
  //  this.http.get('https://fakestoreapi.com/products').subscribe((data)=>{
  //     s=data
  //   })
  //   for(let i=0;i<s.length;i++){
  //       if(s[i].id==num.value){
  //         return {pattern:true}
  //       }
  //       break
  //   }
  //   return null
    
  //  }
}
