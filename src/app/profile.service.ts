import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BaseUrl="https://api.github.com/"

  constructor( private http : HttpClient) { }
}
