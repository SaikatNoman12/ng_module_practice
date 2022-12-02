import { HeaderServiceService } from './../../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit, OnDestroy {

  constructor(private _sub: HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.headerShow.next(true);
    this._sub.goBack.next({ text: 'Back To Products', router: 'products' });
  }

  ngOnDestroy(): void {
    this._sub.goBack.next({ text: '', router: '' });
  }

}
