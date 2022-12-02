import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _sub: HeaderServiceService
  ) { }

  ngOnInit(): void {
    this._sub.headerShow.next(true);
  }

}
