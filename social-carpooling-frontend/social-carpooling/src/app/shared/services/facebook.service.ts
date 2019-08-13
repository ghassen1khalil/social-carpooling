import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {urlConfig} from '../constant/url-config.constants';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private httpClient: HttpClient) { }


  public login(){
    console.log("url : " + environment.context + 'social/' +  urlConfig.login);
    return this.httpClient.get(environment.context + 'social/' +  urlConfig.login);
  }
}
