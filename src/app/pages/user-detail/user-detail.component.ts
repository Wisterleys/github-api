import { Component, OnInit} from '@angular/core';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  constructor(
    public githubService:GitHubService
  ){}

  ngOnInit(){
    console.log(this.githubService.repos,this.githubService.user);
  }

}
