import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repos! : Repo [];

  constructor(private http: HttpClient) { }
}
