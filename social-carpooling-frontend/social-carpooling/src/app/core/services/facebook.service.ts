import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {urlConfig} from '../constant/url-config.constants';
import {Observable} from 'rxjs';
import {FacebookGroup} from '../model/facebook-group';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private httpClient: HttpClient) {
  }


  public login() {
    return this.httpClient.get(environment.context + urlConfig.login, {responseType: 'text'});
  }

  public getConnectedUserName() {
    return this.httpClient.get(environment.context + 'social/getName');
  }


  public getCarpoolingGroups(): Observable<FacebookGroup[]> {
    return this.httpClient.get<FacebookGroup[]>(environment.context + 'social/groups/carpooling');
  }
}
