import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { UserTodosComponent } from './user/user-todos/user-todos.component';
import { UserAlbumsComponent } from './user/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './user/album-photos/album-photos.component';
import { PostCommentsComponent } from './user/post-comments/post-comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserItemComponent,
    UserPostsComponent,
    UserTodosComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
    PostCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
