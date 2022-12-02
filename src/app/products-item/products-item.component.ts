import { ActivatedRoute, Params } from '@angular/router';
import { ProductsItem } from './../galleryModal/products';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderServiceService } from '../appService/header-service.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit, OnDestroy {

  constructor(
    private _surv: HeaderServiceService,
    private _proData: ProductsItem,
    private activeRoute: ActivatedRoute
  ) { }

  proData: any;
  productId: any;

  ngOnInit(): void {

    this._surv.goBack.next({ text: 'Go to Products', router: 'products' });
    this._surv.headerShow.next(true);

    this.activeRoute.params.subscribe((proId: Params) => {
      this.productId = proId['productId'];
    });


    this.proData = this._proData.products[this.productId - 1];

  }

  ngOnDestroy() {
    this._surv.goBack.next({ text: '', router: '' });
  }

}
