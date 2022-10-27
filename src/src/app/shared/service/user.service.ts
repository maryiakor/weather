import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../model/album.model';
import { IComment } from '../model/comment.model';
import { IPhoto } from '../model/photo.model';
import { IPost } from '../model/post.model';
import { ITodo } from '../model/todo.model';
import { IUser } from '../model/user.model';

const URL_PREFIX = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${URL_PREFIX}/users`);
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${URL_PREFIX}/users/${id}`);
  }

  getPostsByUserId(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${URL_PREFIX}/users/${id}/posts`);
  }

  getCommentsByPostId(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(
      `${URL_PREFIX}/posts/${id}/comments`
    );
  }

  getTodosByUserId(id: number): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(`${URL_PREFIX}/users/${id}/todos`);
  }

  getAlbumsByUserId(id: number): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(`${URL_PREFIX}/users/${id}/albums`);
  }

  getPhotosByAlbumId(id: number): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(`${URL_PREFIX}/albums/${id}/photos`);
  }
}
