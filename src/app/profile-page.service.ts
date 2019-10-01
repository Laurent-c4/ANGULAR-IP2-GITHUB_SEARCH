import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private username:string;
  

  constructor(private http:HttpClient) {
    console.log("Serrvice Running");
    this.username = "Laurent-c4";
   }

   getProfileInfo() {
     return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+environment.clientid + "&client_secret=" + environment.clientsecret)
   }
   getProfileRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+environment.clientid + "&client_secret=" + environment.clientsecret)
   }
   updateProfile(username:string) {
       this.username=username;
   }
}
