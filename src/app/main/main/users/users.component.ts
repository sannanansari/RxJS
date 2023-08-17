import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/core/Services/user.service';
import { users } from 'src/app/core/models/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: users[] = [];
  subscription: Subscription = new Subscription();

  constructor(private userService: userService) { }

  ngOnInit() {
    // API added to subscription to destroy in future
    this.subscription.add(
      this.userService.getAllUser().subscribe({
        next: this.getAllUsersByHandler.bind(this),
        error: this.getAllErrorByHandler.bind(this),
      })
    )
  }

  // Handler responsible for storing the user information in user object.
  getAllUsersByHandler(object: users[]) {
    this.users = object;
    // console.log("object ==> ",this.users)
  }

  // Handler to tell error which can be reuse.
  getAllErrorByHandler(error: Error) {
    console.log("Error ==>", error)
  }

  // Unsubscribe after destroy.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
