import { NgModule } from '@angular/core';
import {AuthenticationRoutingModule} from './authentication-routing.moudle';
import {AuthGuardService} from './auth-guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [AuthenticationRoutingModule],
  providers: [
      AuthGuardService
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
