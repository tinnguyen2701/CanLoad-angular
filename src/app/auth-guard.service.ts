import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate {

  constructor(private router: Router) { }

  canLoad(route: Route): boolean {
    console.log('1');

    const url: string = route.path;
    console.log('Url:' + url);
    if (url === 'admin') {
      alert('You are not authorised to visit this page');
      return false;
    }
    return true;
  }

  canActivate() {
    console.log('2');

    return true;
  }
}


