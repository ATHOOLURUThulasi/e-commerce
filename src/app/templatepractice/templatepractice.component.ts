import { Component,ViewChild } from '@angular/core';
@Component({
  selector: 'app-templatepractice',
  templateUrl: './templatepractice.component.html',
  styleUrl: './templatepractice.component.css'
})
export class TemplatepracticeComponent {
  @ViewChild('e')  form:any;
  name:string="thulasi"
  // contactData: {name:string,phonenumber:number}={name:"",phonenumber:0};
  // onSubmit(contForm:any){
  //   console.log(contForm)
  //   console.log(contForm.value.name)
   obj1:{name:string,allmarks:{subject:string,marks:number}[]}[]=[//   console.log(contForm.value.phonenumber)
  // }
 
    // {name:"",allmarks:[{subject:"telugu",marks:0},{subject:"english",marks:0},{subject:"maths",marks:0},{subject:"science",marks:0}]},
    // {name:"",allmarks:[{subject:"telugu",marks:0},{subject:"english",marks:0},{subject:"maths",marks:0},{subject:"science",marks:0}]},
    // {name:"",allmarks:[{subject:"telugu",marks:0},{subject:"english",marks:0},{subject:"maths",marks:0},{subject:"science",marks:0}]}
   ]
  sub(data:any){
  
      this.obj1.push({
          name: data.value.name, 
          allmarks: [
            { subject: 'telugu', marks: data.value.telugu },     
            { subject: 'english', marks: data.value.english },
            { subject: 'maths', marks: data.value.maths },
            { subject: 'science', marks: data.value.science }
          ]

        });
    } 
    ert(data:any){
      console.log(data)
    }
  reset(){
    this.form.resetForm()
    return false;
    
    }
  fun(data:{subject:string,marks:number}[]):number{
    let sum=0
    for(let i of data){
             sum=sum+i.marks
    }
    return sum
  }
  per(data:{subject:string,marks:number}[]):number{
    let y=(this.fun(data))
    let percentage=(y/(data.length*100))*100
    return percentage

  }
  grade(data:{subject:string,marks:number}[]):string{
      let per=this.per(data)
      if(per>50)
        return "pass"
      else
        return "fail"
   }
   check(data:any){
    console.log()

   }
  }



