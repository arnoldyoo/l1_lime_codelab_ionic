import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-modal',
  templateUrl: 'add-modal.html'
})
export class AddModalPage {
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.state = 'add';
  }

}
