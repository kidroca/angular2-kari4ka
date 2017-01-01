/**
 * Created by kidroca on 1.1.2017 г..
 */
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateMemeComponent} from './create-meme/create-meme.component';

const routeConfig: Routes = [{

    path: '',
    component: CreateMemeComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routeConfig)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class CreateContentRoutingModule { }
