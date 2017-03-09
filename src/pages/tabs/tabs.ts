import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any = Tab1Page;
  tab2: any = Tab2Page;
  home: any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
