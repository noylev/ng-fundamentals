import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';



@Injectable()
export class UserRouteActivator implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const userNotExists = !!(this.authService.currentUser === null);
    if (userNotExists) {
      this.router.navigate(['/404']);
    }
    return userNotExists;
  }
}

// tslint:disable-next-line:max-line-length
  /* const userLogged = (!!this.authService.currentUser.firstName === undefined); // !! is to cast the const to boolean - but it works like true

    if (!userLogged) {
      this.router.navigate(['/404']);
    }
    return userLogged;
  }
*/

