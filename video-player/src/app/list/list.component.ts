import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-request.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public apiRequestService: ApiRequestService) {}

videos:any;


  ngOnInit() {
    this.getVideos();
    alert("hi");
  }

  getVideos() {
    this.apiRequestService.getVideosFromServer().subscribe(
       data => { 
         this.videos = data; 
        console.log(this.videos);
       },
       err => {
         alert('Error in fetching Data!'); 
         
         // We can redirect it to error page.
       },
       () => console.log('done loading videos')
   );
}

}
