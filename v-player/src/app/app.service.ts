import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllVideos(): Observable<Object>{

    const headers = new HttpHeaders({
      'Name': 'PrabhatPanda'
    });

    return this.http.get('http://valuefy-assignment-x.herokuapp.com/api/getVideos', {headers: headers} )
  }
}
