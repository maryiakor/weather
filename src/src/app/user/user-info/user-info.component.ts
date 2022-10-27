import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/shared/model/album.model';
import { IPost } from 'src/app/shared/model/post.model';
import { ITodo } from 'src/app/shared/model/todo.model';
import { IUser } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user!: IUser;
  posts!: IPost[];
  todos!: ITodo[];
  albums!: IAlbum[];
  isPostsShow: boolean = false;
  isTodosShow: boolean = false;
  isAlbumsShow: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public getPostsByUserId(id: number) {
    this.isPostsShow = true;
    this.isTodosShow = false;
    this.isAlbumsShow = false;
    this.userService.getPostsByUserId(id).subscribe((posts) => {
      this.posts = posts;
    });
  }
  public getTodosByUserId(id: number) {
    this.isPostsShow = false;
    this.isTodosShow = true;
    this.isAlbumsShow = false;
    this.userService.getTodosByUserId(id).subscribe((todos) => {
      this.todos = todos;
      console.log(todos);
    });
  }
  public getAlbumsByUserId(id: number) {
    this.isPostsShow = false;
    this.isTodosShow = false;
    this.isAlbumsShow = true;
    this.userService.getAlbumsByUserId(id).subscribe((albums) => {
      this.albums = albums;
    });
  }
}
