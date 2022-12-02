import { HeaderServiceService } from './../../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit, OnDestroy {

  constructor(private _sub: HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.headerShow.next(true);
    this._sub.goBack.next({ text: 'go back services', router: 'services' })
  }

  ngOnDestroy(): void {
    this._sub.goBack.next({ text: '', router: '' });
  }

}
