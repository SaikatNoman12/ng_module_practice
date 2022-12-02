import { Subject } from 'rxjs';
import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  dataStyle: object = {
    'margin-right': '6px',
    'color': 'rgb(13, 110, 253)'
  };

  goBack: any;
  goBackk: any = ' ggg';
  headerNav: boolean = true;
  headerLogin: any;
  headerLogInBack: any;
  headerContactDetails: any;
  signIn: any;

  headerShow: any;
  constructor(
    private _sub: HeaderServiceService,
    private singleRoute: Router
  ) {
    this._sub.contact.subscribe((contact: any) => {
      this.headerContactDetails = contact;
    });

    this._sub.signIn.subscribe((sign: any) => {
      this.signIn = sign;
    });

    this._sub.goBack.subscribe((goData: any) => {
      this.goBack = goData;
    });

    this._sub.headerLogInBack.subscribe((headLog: any) => {
      this.headerLogInBack = headLog;
    });

    _sub.headerLogin.subscribe((headerLog: any) => {
      this.headerLogin = headerLog;
    });

    _sub.headerShow.subscribe((showData: any) => {
      this.headerShow = showData;
    });

  }

  ngOnInit(): void {

  }

  onLogOut() {
    this.headerLogInBack = '';
    this.singleRoute.navigate(['./login']);
    this._sub.headerShow.next(false);
  }

  signInData(): void {
    this.singleRoute.navigate(['login']);
    this._sub.headerShow.next(false);
  }

  ngOnDestroy(): void {
  }



}
