import { Component, OnInit } from '@angular/core';
import { IPost } from './shared/model/post.model';
import { IUser } from './shared/model/user.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: IUser[] = [];
  selectedUser!: IUser | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  public getUserById(id: number) {
    this.selectedUser = null;
    this.userService.getUserById(id).subscribe((user) => {
      this.selectedUser = user;
    });
  }
}
