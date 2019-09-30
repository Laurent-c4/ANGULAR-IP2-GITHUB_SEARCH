import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private username:string;
  private clientid="6e827bdb9bca7901898b";
  private clientsecret="f99b3042a2226995e40f64a29b0be28998edc948";

  constructor(private http:HttpClient) {
    console.log("Serrvice Running");
    this.username = "Laurent-c4";
   }

   getProfileInfo() {
     return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+this.clientid + "&client_secret=" + this.clientsecret)
   }
   getProfileRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+this.clientid + "&client_secret=" + this.clientsecret)
   }
}
