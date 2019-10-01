import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfilePageService } from './profile-page.service';
import { DatepipePipe } from './datepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    DatepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfilePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
