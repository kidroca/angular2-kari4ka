import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

    email: string;

    constructor() {
    }

    ngOnInit() {}

    onSubmit(requestInvite: NgForm) {

        if (requestInvite.invalid) {
            return;
        }

        console.log('Add this to email to the invites: ', this.email);
    }
}
