/**
 * Created by kidroca on 31.12.2016 г..
 */
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import {ErrorDefinitionService} from './form-input/error-definition.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        NgbModule,
        FormInputComponent
    ],
    declarations: [FormInputComponent],
    providers: [ErrorDefinitionService],
})
export class SharedModule { }

