import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/shared/model/album.model';
import { IPhoto } from 'src/app/shared/model/photo.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss'],
})
export class AlbumPhotosComponent implements OnInit {
  @Input() photo!: IPhoto;
  isShowBigPhoto: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
