import {Component, OnInit} from '@angular/core';

import {PicturesService} from '../../_services/pictures/pictures.service';
import {Picture} from '../../../types/pictures';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  pictures: Array<Picture> = [];

  constructor(private picturesService: PicturesService) {
    this.picturesService.getUserPictures()
      .subscribe(response => {
        this.pictures = response;
      }, err => {
        console.error(err);
      });
  }

  ngOnInit(): void {
  }

}
