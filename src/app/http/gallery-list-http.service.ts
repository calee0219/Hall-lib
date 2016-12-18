import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GalleryListHttpService {

  constructor(private http: Http) { }

  getData() {
    this.http.get('140.113.66.249:65534/getinfo')
      .map((response: Response) => response.json());
  }

}
