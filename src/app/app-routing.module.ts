import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { ProductsItemComponent } from './products-item/products-item.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { ErrorComponent } from './error/error.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { ProductsComponent } from './products/products.component';
import { ImageFourComponent } from './gallery/image-four/image-four.component';
import { ImageThreeComponent } from './gallery/image-three/image-three.component';
import { ImageTwoComponent } from './gallery/image-two/image-two.component';
import { ImageOneComponent } from './gallery/image-one/image-one.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  // {
  //   path: 'gallery', children: [
  //     { path: '', component: GalleryComponent },
  //     { path: 'image-1', component: ImageOneComponent },
  //     { path: 'image-2', component: ImageTwoComponent },
  //     { path: 'image-3', component: ImageThreeComponent },
  //     { path: 'image-4', component: ImageFourComponent },
  //   ]
  // },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: GalleryItemComponent },
  // { path: 'products', component: ProductsComponent },
  // { path: 'products/:productId', component: ProductsItemComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ServicesModule,
    ProductsModule,
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
