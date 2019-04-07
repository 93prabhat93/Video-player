import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  private _url : string = "https://valuefy-assignment-x.herokuapp.com/api/getVideos";

  constructor( private http: HttpClient) { }

  getplaylist(){
    return this.http.get(this._url);
  }
}
