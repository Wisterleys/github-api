import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  isLoading:boolean=false;
  
  constructor(
    public router:Router,
    private snackBar: MatSnackBar,
    private githubService:GitHubService
  ){}

  onGetWords(value:string){
    this.isLoading=true;
   
    forkJoin({
      user:this.githubService.getUsers(value),
      repos:this.githubService.getRepos(value)
    }).subscribe({
      next:(value:any)=>{
        this.githubService.user = value.user;
        this.githubService.repos = value.repos;
        this.isLoading=false;
        this.router.navigate(['/detail']);
      },
      error:(err:any)=>{
        this.openSnackbar(`Ops! usuário ${value} não encontrado`);
        this.isLoading=false;
      }

    })
    
    
  }
  openSnackbar(value:string){
    this.snackBar.open(value);
  }
}
