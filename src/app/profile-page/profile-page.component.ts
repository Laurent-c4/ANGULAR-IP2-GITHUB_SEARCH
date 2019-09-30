import { Component, OnInit } from '@angular/core';
import {ProfilePageService} from '../profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private profilePageService:ProfilePageService) {
    this.profilePageService.getProfileInfo().subscribe(profile => {
      console.log(profile  );
    });
   }

  ngOnInit() {
  }

}
