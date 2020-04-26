import {Component, OnInit} from '@angular/core';
import {FacebookGroup} from '../../core/model/facebook-group';
import {FacebookService} from '../../core/services/facebook.service';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-profile-preferences',
  templateUrl: './profile-preferences.component.html',
  styleUrls: ['./profile-preferences.component.scss']
})
export class ProfilePreferencesComponent implements OnInit {

  private userName: string;
  private isSetPrefStart: boolean;
  private isLoaderOn: boolean;

  private userAllCarpoolingGroups: FacebookGroup[] = [];
  private selectedGroups: FacebookGroup[] = [];

  constructor(private facebookService: FacebookService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.isSetPrefStart = true;
    this.userName = 'Ghassen';
    this.isLoaderOn = false;
    this.populateGroups();
  }

  private populateGroups() {
    this.facebookService.getCarpoolingGroups().subscribe(groups => this.userAllCarpoolingGroups = groups);
  }

  public toggle(groupdId: string) {
    this.selectedGroups.push.apply(this.selectedGroups, this.userAllCarpoolingGroups.filter(group => group.id === groupdId));
  }

  public saveSelectedGroups() {
    this.isLoaderOn = true;
    this.userService.saveUserGroups(this.selectedGroups).subscribe(() => this.isLoaderOn = false);
  }

}
