import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `<html>
              <app-nav-bar></app-nav-bar>
              <router-outlet></router-outlet>
              </html>`
})
export class EventsAppComponent {
}
