import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

    email: string;
    triedToSubmit: boolean = false;

    constructor() {
    }

    ngOnInit() {}

    onSubmit(requestInvite: NgForm) {

        this.triedToSubmit = true;

        if (requestInvite.invalid) {
            return;
        }

        console.log('Add this to email to the invites: ', this.email);
    }
}
