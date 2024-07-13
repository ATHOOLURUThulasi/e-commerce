import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  d=[{
    id:1,
    name:"thulasi",
    category:"female"
   },
  {
    id:2,
    name:"tharun",
    category:"male"
  },{
    id:3,
    name:"tittu",
    category:"male"
  },
{
  id:4,
  name:"panda",
  category:"male"
},{
  id:5,
  name:"pallavi",
  category:"female"
},{
  id:6,
  name:"vyshu",
  category:"female"
}]

  constructor() { }

}
