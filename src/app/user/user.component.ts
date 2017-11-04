import { Component, OnInit } from '@angular/core';
import {User} from "./";
import {UserService} from '../services';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  model: User = new User();
  constructor(private  userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(1).then(
      (user: User) => {this.model = user;},
      (reason) => {}
    );
  }

  onSubmitClick(){
    this.userService.saveUser(this.model);
  }

}
