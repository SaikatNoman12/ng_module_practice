import { HeaderServiceService } from './../../appService/header-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vfx',
  templateUrl: './vfx.component.html',
  styleUrls: ['./vfx.component.scss']
})
export class VfxComponent implements OnInit {

  constructor(private _sub: HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.headerShow.next(true);
    this._sub.goBack.next({ text: 'go back services', router: 'services' })
  }

  ngOnDestroy(): void {
    this._sub.goBack.next({ text: '', router: '' });
  }
}
