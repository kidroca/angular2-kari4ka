/**
 * Created by kidroca on 31.12.2016 г..
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthenticationComponent} from './authentication.component';
import {RegisterComponent} from './register/register.component';

const routeConfig: Routes = [
    {
        path: 'auth',
        component: AuthenticationComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routeConfig)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
