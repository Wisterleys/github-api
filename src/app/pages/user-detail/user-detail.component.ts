import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {forkJoin,Subject,switchMap,debounceTime,of,distinctUntilChanged} from 'rxjs';
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
 
  public isSearch:boolean =false;
  public login:string ='';
  public twitter:string = '';//icon
  public office:string = '';//icon
  public flowers:string = '';//icon
  public heart:string = '';//icon
  public map:string = '';//icon
  public email:string = '';//icon
  public star:string = '';//icon

  private subJectSearch: Subject<string> = new Subject<string>();
  constructor(
    public githubService:GitHubService,
    private router:Router,
    private snackBar: MatSnackBar,
  ){
    this.twitter= ImagePaths.twitter_icon;
    this.office= ImagePaths.office_work;
    this.heart= ImagePaths.heart;
    this.flowers= ImagePaths.group;
    this.map= ImagePaths.map_pointer;
    this.email= ImagePaths.email;
    this.star= ImagePaths.star;
  }

  ngOnInit(){
    let userName: string = '';
    this.subJectSearch.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((value:string) => {
        userName = value;
        console.log(userName)
        if(value.trim() === ''){
          return of({user:null,repos:null})
        }
        return forkJoin({
          user:this.githubService.getUsers(value),
          repos:this.githubService.getRepos(value)
        });
    }))
    .subscribe({
      next:(value:any)=>{
        this.githubService.user = value.user;
        this.githubService.repos = value.repos;
        this.login=`@${this.githubService.user?.login??''}`;
        this.isSearch=false;
        
        
      },
      error:(err:any)=>{
        console.log(err);
        this.login=`@${this.githubService.user?.login??''}`;
        this.isSearch=false;
        this.openSnackbar(`Ops! usuário ${userName} não encontrado`);
        
      }

    });
    if(this.githubService.repos==undefined||this.githubService.user==undefined)
      this.router.navigate(['/']);
      this.login=`@${this.githubService.user?.login??''}`;
      
    
  }
  onGetWords(value:string){
    if(!this.isSearch){
      this.isSearch=true;
      this.subJectSearch.next(value)
    }
    
  }
  openSnackbar(value:string){
    this.snackBar.open(value);
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
  updated(timestamp:string):string{
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return `Atualizado há ${diffInDays} dias.`;
  }

}
