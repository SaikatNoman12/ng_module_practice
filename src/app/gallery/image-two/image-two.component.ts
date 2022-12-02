import { HeaderServiceService } from './../../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-two',
  templateUrl: './image-two.component.html',
  styleUrls: ['./image-two.component.scss']
})
export class ImageTwoComponent implements OnInit, OnDestroy {

  constructor(private _sub: HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.goBack.next({ text: 'Go To Gallery', router: 'gallery' });
  }

  ngOnDestroy(): void {
    this._sub.goBack.next({ text: '', router: '' });
  }

}
