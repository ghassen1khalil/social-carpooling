import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FacebookGroup} from '../model/facebook-group';
import {urlConfig} from '../constant/url-config.constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }


  public saveUserGroups(selectedGroups: FacebookGroup[]): Observable<FacebookGroup[]> {
    return this.httpClient.post<FacebookGroup[]>(environment.context + urlConfig.saveSelectedGroups, selectedGroups);
  }
}
