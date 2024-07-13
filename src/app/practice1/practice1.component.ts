import { AfterContentChecked, Component,ContentChild,ContentChildren,ElementRef,QueryList,TemplateRef,contentChild } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrl: './practice1.component.css'
})
export class Practice1Component  implements AfterContentChecked{
@ContentChildren('f') data:QueryList<any>;
    ngAfterContentChecked(): void {
     for(let i=0;i<this.data.last._results.length;i++)
      console.log(this.data.last._results[i].nativeElement.innerText)
    }
}
