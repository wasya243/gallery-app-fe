import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Picture} from '../../../types/pictures';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  constructor(private http: HttpClient) {
  }

  getUserPictures(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>('/user-pictures');
  }
}
