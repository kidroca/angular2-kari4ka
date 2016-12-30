import {Component, OnInit} from '@angular/core';
import {AppUserService} from './data/app-user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    title = 'app works!';

    constructor(private userService: AppUserService) {}

    ngOnInit(): void {

        this.userService.logIn('admin', '123456')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}
