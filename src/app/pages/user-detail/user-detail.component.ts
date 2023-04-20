import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RepoModel } from 'src/app/models/repo.model';
import { UserModel } from 'src/app/models/user.model';
import { GitHubService } from 'src/app/services/github.service';
import { ImagePaths } from 'src/app/utils/image_paths';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
 
  public login:string ='';
  public twitter:string = '';//icon
  public office:string = '';//icon
  public flowers:string = '';//icon
  public heart:string = '';//icon
  public map:string = '';//icon
  public email:string = '';//icon
  constructor(
    public githubService:GitHubService,
    private router:Router,
  ){
    this.twitter= ImagePaths.twitter_icon;
    this.office= ImagePaths.office_work;
    this.heart= ImagePaths.heart;
    this.flowers= ImagePaths.group;
    this.map= ImagePaths.map_pointer;
    this.email= ImagePaths.email;
  }

  ngOnInit(){
    if(this.githubService.repos==undefined||this.githubService.user==undefined)
      this.router.navigate(['/']);
      this.login=`@${this.githubService.user?.login??''}`;
      console.log(this.githubService.user);
    
  }
  onGetWords(value:string){
   console.log(value)
    
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

  openTwitter(value:string) {
    window.open(`https://twitter.com/${value}`, '_blank');
  }
  openBlog(value:string) {
    window.open(`https://${value}`, '_blank');
  }

}
