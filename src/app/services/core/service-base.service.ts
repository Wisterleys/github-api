import { GenericResultCommand } from 'src/app/commands/core/generic-result.command';
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Entity } from 'src/app/models/core/entity.model';

import { HeaderUtil } from 'src/app/utils/header.util';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceBase<T extends Entity> {

  protected http: HttpClient;
  protected apiUrl: string

  constructor(
    @Inject(String) protected endpoint: string,
    protected injector: Injector
  ) {
    this.http = this.injector.get(HttpClient);
    this.apiUrl = `${environment.apiUrl}${endpoint}`;
  }

  getAll(endpoint: string): Observable<GenericResultCommand> {
    return this.http.get<GenericResultCommand>(endpoint, { headers: HeaderUtil.get() });
  }

  getById(endpoint: string = this.apiUrl): Observable<GenericResultCommand> {
    return this.http.get<GenericResultCommand>(endpoint, { headers: HeaderUtil.get() });
  }

  post(endpoint: string, resource: T): Observable<GenericResultCommand> {
    return this.http.post<GenericResultCommand>(endpoint, resource, { headers: HeaderUtil.get() });
  }

  put(endpoint: string, resource: T): Observable<GenericResultCommand> {
    return this.http.put<GenericResultCommand>(endpoint, resource, { headers: HeaderUtil.get() });
  }

  delete(endpoint: string): Observable<GenericResultCommand> {
    return this.http.delete<GenericResultCommand>(endpoint, { headers: HeaderUtil.get() });
  }

}
