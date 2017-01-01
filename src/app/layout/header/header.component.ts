import { Component, OnInit } from '@angular/core';
import {AppUserService} from '../../core/data/app-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: AppUserService) { }

  get username() {
      return this.userService.getUsername();
  }

  get isAuthenticated() {
      return this.userService.authenticated();
  }

  ngOnInit() {}
}
