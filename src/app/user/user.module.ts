import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent    } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRouteActivator } from './user-route-activator.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [UserRouteActivator]
})
export class UserModule { }
