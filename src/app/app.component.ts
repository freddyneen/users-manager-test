import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: User[];
  error: string;
  userId: number;

  ngOnInit(): void {
    fetch('https://isa-simple-rest-api.herokuapp.com/api/users')
      .then(resp => resp.json())
      .then(resp => this.data = resp)
      .catch(reason => this.error = reason);
  }

  setUser(user: User) {
    this.userId = user.id;
  }
}
