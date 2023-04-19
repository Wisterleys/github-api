import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthStorage } from 'src/app/shared/storage/auth.storage';
import { environment } from "src/environments/environment.development";


/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = AuthStorage.getToken();
    const app = environment.app
    const requestURL: Array<any> = request.url.split("/");
    const apiUrl: Array<any> = environment.apiUrl.split("/");
    if (token && requestURL[2] === apiUrl[2]) {
      const newRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`, app: app,}
      });
      return next.handle(newRequest);
    } else {
      const newRequest = request.clone({
        setHeaders: {  }
      });
      return next.handle(newRequest);
    }
  }

}
