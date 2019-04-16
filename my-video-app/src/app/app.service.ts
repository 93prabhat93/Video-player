import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  constructor(public http: HttpClient) {}
  public ping() {
    this.http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
