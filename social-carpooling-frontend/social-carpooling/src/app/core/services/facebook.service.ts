import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {urlConfig} from '../constant/url-config.constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private httpClient: HttpClient) {
  }


  public login(): Observable<string> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get<string>(environment.context + 'social/' + urlConfig.login, {responseType: 'text'});
  }

  public getConnectedUserName() {
    return this.httpClient.get(environment.context + 'social/getName');
  }
}
