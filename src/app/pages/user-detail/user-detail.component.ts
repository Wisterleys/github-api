import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RepoModel } from 'src/app/models/repo.model';
import { UserModel } from 'src/app/models/user.model';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  constructor(
    public githubService:GitHubService,
    private router:Router,
  ){}

  ngOnInit(){
    if(this.githubService.repos==undefined||this.githubService.user==undefined)
      this.router.navigate(['/']);

      console.log(this.githubService.repos);
    
  }

  get user():UserModel {
    return this.githubService.user as UserModel;
  }

  get repos():Array<RepoModel> {
    let data = this.githubService.repos!=undefined?this.githubService.repos:[];
    let r:Array<RepoModel> = [];
    r = data;
    return r;
  }

}
