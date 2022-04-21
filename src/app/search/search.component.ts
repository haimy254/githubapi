import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile/profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  profile: Profile = new Profile();
  avatar!: 'avatar_url';
  user: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}
  onSubmit(userName: string) {
    console.log(userName);

    this.profileService.getUser(userName).then((result) => {
      console.log(result);
      this.user = result;
    });
  }
}
