import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor() { }

  contact: any = new BehaviorSubject<any>(false);

  signIn: any = new BehaviorSubject<any>(false);

  goBack: any = new BehaviorSubject<any>({ text: '', router: '' });

  headerLogInBack:any = new BehaviorSubject<any>('');

  headerLogin:any = new BehaviorSubject<any>(true);

  headerShow:any = new BehaviorSubject<any>(false);

  

}
