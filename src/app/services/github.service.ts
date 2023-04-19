import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResultCommand } from '../commands/core/generic-result.command';
import { ServiceBase } from './core/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubService extends ServiceBase<any>{
  
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
