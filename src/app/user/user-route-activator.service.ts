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
    return true;
  }
}


