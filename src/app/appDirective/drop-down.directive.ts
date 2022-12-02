import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor() {}


  @HostBinding('class.active') myClass:any = false;
  @HostListener('click') myClick(){
    this.myClass = !this.myClass;
  }

  

}
