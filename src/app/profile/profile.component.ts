import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  repo!: Repo[];
 

  constructor(private RepoService: RepoService) {}

  ngOnInit(): void {}
  onClick(repo: string) {
    console.log(repo);

    this.RepoService.getUser(repo).then((result) => {
      console.log(result);
      this.repo = [];
    });
  }
}
