import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrl: './cmp1.component.css'
})
export class Cmp1Component {
  // v:any;
  // f:any;
  // w:string=''
//  constructor(private pb:ServiceService,private er:ActivatedRoute){
//   this.er.queryParamMap.subscribe((data)=>{
//     this.v=data.get('category')
//     console.log(this.v)
//     if(this.v){
//     this.f=this.pb.d.filter((i)=> i.category==this.v)
//     console.log(this.f)}
//     else{
//       this.w="thulasi"
//       console.log("no")
//     }
//   })
//  }
canDeactivate(){
  return true
}
 
}
