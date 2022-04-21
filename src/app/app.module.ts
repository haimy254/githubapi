import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
