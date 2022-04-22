import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  repos!: Repo[];
  BaseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  async getUser(userName: string) {
    let response = this.http.get(`${this.BaseUrl}/users/${userName}`);
    return await lastValueFrom(response).then((result) => result);
  }
}
