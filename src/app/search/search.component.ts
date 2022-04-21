
import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile: Profile = new Profile;

  constructor() { }

  ngOnInit(): void {
    
  }

}
