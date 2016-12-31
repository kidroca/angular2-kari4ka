/**
 * Created by kidroca on 31.12.2016 г..
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const routeConfig: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routeConfig)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
