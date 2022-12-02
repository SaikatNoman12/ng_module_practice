import { GalleryItemData } from './../galleryModal/gallery';
import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { get } from 'jquery';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  constructor(
    private _sub: HeaderServiceService,
    private _gallery: GalleryItemData,
    private activeRoute: ActivatedRoute
  ) { }

  galleryItems: any;
  getRoute: any;
  getId: any;

  ngOnInit(): void {
    this._sub.goBack.next({ text: 'Go Back Gallery', router: 'gallery' });
    this._sub.headerShow.next(true);
    
    this.getRoute = this.activeRoute.params.subscribe((params: Params) => {
      this.getId = params['id'];
    });

    this.galleryItems = this._gallery.products[this.getId - 1];
  }

  ngOnDestroy() {
    this._sub.goBack.next({ text: '', router: '' });
  }

}
