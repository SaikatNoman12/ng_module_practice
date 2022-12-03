import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { data } from 'jquery';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService {

  preload(route: Route, fn: () => Observable<any>): Observable<any>{

    if(route.data && route.data['preload']){
      return fn();
    }
    else{
      return of(null);
    }

  };

  constructor() { }
}
