import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor( private _sub:HeaderServiceService) { }

  ngOnInit(): void {
    this._sub.headerShow.next(true);
  }

}
