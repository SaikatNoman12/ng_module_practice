import { DropDownDirective } from '../appDirective/drop-down.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DropDownDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DropDownDirective
  ]
})
export class SharedModuleModule { }
