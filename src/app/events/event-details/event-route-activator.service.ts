import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id); // !! is to cast the const to boolean - but it works like true

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }

}
