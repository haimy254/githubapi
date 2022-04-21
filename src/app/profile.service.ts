import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  [x: string]: any;
  BaseUrl = 'https://api.github.com/';
  user: any = 'haimy254';

  constructor(private http: HttpClient) {
    async () => {
      let response = await http.get(`${this.BaseUrl}/users/${this.user}`);
      console.log(response)
    };
  }
}
