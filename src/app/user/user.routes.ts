import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { UserRouteActivator } from './user-route-activator.service';

export const userRoutes = [
  {path: 'profile', component: ProfileComponent, canActivate: [UserRouteActivator]},
  {path: 'login', component: LoginComponent}
]
