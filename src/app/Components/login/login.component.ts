import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public checkLogin() {
    console.log('User name --> ' + this.user.name + ' User surname --> ' + this.user.surname + ' User password --> ' + this.user.password + ' User birthdate --> ' + this.user.birthdate + ' User email --> ' + this.user.email + ' User age --> ' + this.user.age);
  }

}
