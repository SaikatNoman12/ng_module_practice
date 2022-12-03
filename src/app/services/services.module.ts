import { SharedModuleModule } from '../sharedModules/shared-module.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { VfxComponent } from './vfx/vfx.component';
import { VideoComponent } from './video/video.component';
import { UiuxComponent } from './uiux/uiux.component';
import { DropDownDirective } from '../appDirective/drop-down.directive';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'uiux', component: UiuxComponent },
  { path: 'video', component: VideoComponent },
  { path: 'vfx', component: VfxComponent },
  { path: 'graphics', component: GraphicsComponent },
];


@NgModule({
  declarations: [
    ServicesComponent,
    GraphicsComponent,
    VfxComponent,
    VideoComponent,
    UiuxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class ServicesModule {

  constructor() {
    console.log('services loaded');
  }

}
