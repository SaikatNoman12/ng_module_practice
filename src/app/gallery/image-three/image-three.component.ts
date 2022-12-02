import { HeaderServiceService } from './../../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-three',
  templateUrl: './image-three.component.html',
  styleUrls: ['./image-three.component.scss']
})
export class ImageThreeComponent implements OnInit, OnDestroy {

  constructor(private _sub: HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.goBack.next({ text: 'Go To Gallery', router: 'gallery' });
  }

  ngOnDestroy(): void {
    this._sub.goBack.next({ text: '', router: '' });
  }

}

