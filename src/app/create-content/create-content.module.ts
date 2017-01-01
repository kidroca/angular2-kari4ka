import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CreateMemeComponent} from './create-meme/create-meme.component';
import {CreateContentRoutingModule} from './create-content-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CreateContentRoutingModule
    ],
    declarations: [CreateMemeComponent]
})
export class CreateContentModule {}
