import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActGuard implements CanActivate {

  constructor(public router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return new Observable((Ne) => {
      var condition = true;
      var string = localStorage.getItem('login')+'';
      
      var string2 = ( string === 'null' ? '':string);
      if(route.data.condition === 'login'){
        if(string2.length > 0){
          condition = false;
          this.router.navigate(['/admin']);
        }
      }else{
        if(string2.length == 0) {
          condition = false;
          this.router.navigate(['/login']);
        }
      }
      Ne.next(condition);
    });
  }
  
}
