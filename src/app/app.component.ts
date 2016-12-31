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
    }
}
