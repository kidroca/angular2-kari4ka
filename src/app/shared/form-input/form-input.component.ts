import {Component, Input} from '@angular/core';
import {NgModel} from '@angular/forms';
import {ErrorDefinitionService} from './error-definition.service';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.less']
})
export class FormInputComponent {

    @Input() labelText: string = 'set the `labelText` attribute';
    @Input() ngModelController: NgModel;
    @Input() displayMessages: boolean = false;

    constructor(private definitions: ErrorDefinitionService) {}

    get errorMessage(): string {

        if (this.displayMessages) {
            return this.definitions.getDefinition(this.ngModelController.errors);
        }

        return '';
    }

    getGroupClass(prefix?: string): string {

        if (this.displayMessages) {

            let suffix = this.ngModelController.errors
                ? GroupClasses[GroupClasses.danger]
                : GroupClasses[GroupClasses.success];

            return prefix + suffix;
        }

        return '';
    }
}

enum GroupClasses { success, danger }
