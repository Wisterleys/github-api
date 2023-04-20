import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResultCommand } from '../commands/core/generic-result.command';
import { ServiceBase } from './core/service-base.service';
import { UserModel } from '../models/user.model';
import { RepoModel } from '../models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubService extends ServiceBase<any>{
  public user?:UserModel;
  public repos?:RepoModel;
  constructor(
    protected override injector: Injector
  ) {
    super('',injector);
   
  }
  getUsers(username:string):Observable<GenericResultCommand>{
    return super.getAll(`${this.apiUrl}/users/${username}`);
  }
  getRepos(username:string):Observable<GenericResultCommand>{
    return super.getAll(`${this.apiUrl}/users/${username}/repos`);
  }
}
