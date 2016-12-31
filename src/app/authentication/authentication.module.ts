import { NgModule } from '@angular/core';
import {AuthenticationRoutingModule} from './authentication-routing.moudle';
import {AuthGuardService} from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import {AuthenticationComponent} from './authentication.component';

@NgModule({
  imports: [
      AuthenticationRoutingModule,
      SharedModule
  ],
  providers: [
      AuthGuardService
  ],
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent]
})
export class AuthenticationModule { }
