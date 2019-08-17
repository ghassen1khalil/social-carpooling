import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {urlConfig} from '../constant/url-config.constants';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private httpClient: HttpClient) {
  }


  public login() {
    let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    console.log('url : ' + environment.context + 'social/' + urlConfig.login);
    return this.httpClient.get(environment.context + 'social/' + urlConfig.login, {headers: headers});
  }

  public getConnectedUserName() {
    return this.httpClient.get(environment.context + 'social/getName');
  }
}
