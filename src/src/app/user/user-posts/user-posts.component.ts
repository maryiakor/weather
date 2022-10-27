import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/model/comment.model';
import { IPost } from 'src/app/shared/model/post.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  @Input() post!: IPost;
  comments: IComment[] = [];
  isShowComments: boolean = true;

  constructor(private userServise: UserService) {}

  ngOnInit(): void {}

  public getCommentsByPostId() {
    if (this.comments.length) {
      this.isShowComments = !this.isShowComments;
      return;
    }
    this.userServise.getCommentsByPostId(this.post.id).subscribe((comments) => {
      this.comments = comments;
      this.isShowComments = false;
    });
  }
}
