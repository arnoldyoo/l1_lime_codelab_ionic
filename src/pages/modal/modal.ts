import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  siteinfo: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.siteinfo = navParams.get('siteinfo');
    console.log(this.siteinfo.$key);
  }

  ionViewDidLoad() { }

  close(): void{
    this.viewCtrl.dismiss('close success');
  }

}
