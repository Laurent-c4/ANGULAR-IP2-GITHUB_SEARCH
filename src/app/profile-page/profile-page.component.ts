import { Component, OnInit } from '@angular/core';
import {ProfilePageService} from '../profile-page.service';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  repoInfo:any;
  username:string;
  userInfo:UserInfo

  constructor(private profilePageService:ProfilePageService) {
   }

   findProfile() {
    this.profilePageService.updateProfile(this.username)
    this.userInfo=this.profilePageService.userInfo
    this.repoInfo=this.profilePageService.repoInfo
    this.profilePageService.getProfileInfo()
    this.profilePageService.getProfileRepos()
    this.profilePageService.updateProfile(this.username)
    
    // this.profilePageService.updateProfile(this.username)
   }

  ngOnInit() {
  }

}
