import { Component, Output,EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
   b:any=[]
  constructor(private e:ServiceService,){
   this.b=this.e.d
  }
 

    // @Output()  a= new EventEmitter<any>();
  
  //      constructor() {
  //     // Example method that emits the 'a' event with some data
  //     this.a.emit('Hello from app-communication');
    
  // }
  // data3:string="this is thulasi"
//  constructor(){
//   this.a.emit("pallavi")
//   console.log("pallavi")
//  }
//   // @Input() data:string='';
  // data1:string='ppp'
  // @Input() data2:number=0
  // @Input() data3:string=''
  // data:string="this is angular"
  // data3:string='thulasi'
  // data:string="this is angular"
  // @Input()  a:string[]=[]
  // fun(){
  //   return "tittu"
  // }
}
