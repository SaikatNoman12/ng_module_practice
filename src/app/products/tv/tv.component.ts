import { HeaderServiceService } from './../../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit, OnDestroy {

  constructor(private _sub: HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.headerShow.next(true);
    this._sub.goBack.next({ text: 'Back to Products', router: 'products' });
  }

  ngOnDestroy() {
    this._sub.goBack.next({ text: '', router: '' });
  }

}
