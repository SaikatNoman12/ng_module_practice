import { SharedModuleModule } from './../sharedModules/shared-module.module';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const router: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'washing-machine', component: WashingMachineComponent },
      { path: 'tv', component: TvComponent },
    ]
  },
]


@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    SharedModuleModule
  ]
})
export class ProductsModule { }
