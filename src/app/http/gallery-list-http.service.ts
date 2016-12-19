import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Card } from '../type/card';
import { CARDS } from './mData';

@Injectable()
export class GalleryListHttpService {

  constructor(private http: Http) { }
  
  getmData(): Card[] {
    return CARDS;
  }

  getData() {
    this.http.get('140.113.66.249:65534/getinfo')
      .map((response: Response) => response.json());
  }

}
