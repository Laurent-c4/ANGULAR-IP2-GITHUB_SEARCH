import { Component, OnInit } from '@angular/core';
import {ProfilePageService} from '../profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profilePage:any;
  repos:any;

  constructor(private profilePageService:ProfilePageService) {
    this.profilePageService.getProfileInfo().subscribe(profilePage => {
      console.log(profilePage);
      this.profilePage=profilePage;
    });
    this.profilePageService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;

    });
   }

  ngOnInit() {
  }

}
