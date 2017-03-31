import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { firebaseGoogleAuthentication, firebaseFaceookAuthentication } from '../../firebase.config';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'HOME';

  constructor(public navCtrl: NavController, private angularFire: AngularFire) {
  }

  isProcessing: boolean = true;
  isLogin: boolean = false;
  userUID: string;
  userName: string;

  ngOnInit(): void {
    this.angularFire.auth.subscribe((data) => {
      if(data) {
        this.userUID = data.auth.uid;
        this.userName = data.auth.displayName;
        this.isLogin = true;
      }
      else {
        this.userUID = undefined;
        this.userName = undefined;
        this.isLogin = false;
      }

      this.isProcessing = false;
    });
  }

  doLogin(provider: string): void {
    const loginConfig = (provider === 'google') ? firebaseGoogleAuthentication : firebaseFaceookAuthentication;
    this.angularFire.auth.login(loginConfig);
  }

  doLogout(): void {
    this.angularFire.auth.logout();
  }

}
