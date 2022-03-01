import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResolveResolver implements Resolve<any> {
  constructor(public http: HttpClient) {}


  //this is when the link is corrupted it will return this value to continue to-
  //__the browser
  catchesE(err: any): any{
      if(err){
        return of(false);
      }
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){

    var http = (route.data.condition ? 'https://jsonplaceholder.typicode.com/users': 'http://jsonplaceholder.typicode.com/posts');

    return this.http.get(http).pipe( catchError(this.catchesE) );
  }
}