import { Component } from '@angular/core';
import { AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'v-player';

  constructor(private appService: AppService){}

  ngOnInit(){
    this.appService.getAllVideos().subscribe(data => console.log(data));
  }
}
