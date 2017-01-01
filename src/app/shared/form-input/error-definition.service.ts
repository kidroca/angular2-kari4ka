import {Injectable} from '@angular/core';

const definitions = {
    required: 'This field is required',
    minlength: 'The value is too short',
    maxlength: 'The value exceeds the maximum length',
    email: 'The value is not a valid email address',
    pattern: 'The value does not match a valid pattern',
    problem: 'There is a problem with this field'
};

@Injectable()
export class ErrorDefinitionService {

    constructor() {}

    getDefinition(errors: any): string {

        if (!errors) {return ''; }

        for (let key in definitions) {
            if (errors[key]) {

                return definitions[key];
            }
        }

        return definitions.problem;
    }
}
