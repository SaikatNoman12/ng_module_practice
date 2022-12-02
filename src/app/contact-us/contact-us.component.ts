import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {

  constructor(
    private _sub: HeaderServiceService
  ) { }

  ngOnInit(): void {
    this._sub.contact.next(true);
    this._sub.signIn.next(false);
    this._sub.headerLogin.next(false);
    this._sub.headerShow.next(true);
  }


  ngOnDestroy() {
    this._sub.contact.next(false);
    this._sub.signIn.next(true);
    this._sub.headerLogin.next(true);
  }


}
