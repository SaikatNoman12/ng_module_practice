import { HeaderServiceService } from './../appService/header-service.service';
import { ProductsItem } from './../galleryModal/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _sub:HeaderServiceService,
    private _proDuct: ProductsItem,
  ) { }

  products: any;

  ngOnInit(): void {
    this._sub.headerShow.next(true);
    this.products = this._proDuct.products;
  }


}