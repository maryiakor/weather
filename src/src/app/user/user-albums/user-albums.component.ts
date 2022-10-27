import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/shared/model/album.model';
import { IPhoto } from 'src/app/shared/model/photo.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss'],
})
export class UserAlbumsComponent implements OnInit {
  @Input() album!: IAlbum;
  photos: IPhoto[] = [];
  isShowPhotos: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public getPhotosByAlbumId() {
    if (this.photos.length) {
      this.isShowPhotos = !this.isShowPhotos;
      return;
    }
    this.userService.getPhotosByAlbumId(this.album.id).subscribe((photos) => {
      this.photos = photos;
      this.isShowPhotos = false;
    });
  }
}
