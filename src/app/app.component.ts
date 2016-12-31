import {Component, OnInit} from '@angular/core';
import {AppUserService} from './core/data/app-user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    title = 'app works!';

    constructor(private userService: AppUserService) {}

    ngOnInit(): void {

        this.userService.setUsername('admin');
        this.userService.setPassword('123456');

        this.userService.logIn()
            .then(res => {
                console.log(res);
                console.log(this.userService.authenticated());
            });
    }
}
