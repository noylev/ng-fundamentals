import {Routes} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolverService
} from './events';
import {Error404Component} from './errors/404.component';



export const appRoutes: Routes = [

  { path: 'events/new', component: CreateEventComponent , canDeactivate: ['canDeactivateCreateEvent']},
  { path: '404', component: Error404Component },
  { path: 'events', component: EventsListComponent , resolve: {events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivator]},
  { path: '', redirectTo: '/events', pathMatch:  'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
