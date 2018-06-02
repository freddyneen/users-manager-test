import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnChanges {
  @Input() userId: number;

  user: User;
  error: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof (changes.userId.currentValue) !== 'undefined') {
      this.getUserData(changes.userId.currentValue);
    }
  }

  private getUserData(id: number) {
    fetch(`https://isa-simple-rest-api.herokuapp.com/api/users/${id}`)
      .then(resp => resp.json())
      .then(resp => this.user = resp)
      .catch(reason => this.error = reason);
  }

}
