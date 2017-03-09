import { ModalPage } from './../modal/modal';
import { ModalController } from 'ionic-angular/components/modal/modal';
import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page implements OnInit{

  items: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {

  }
  ngOnInit(): void {
    this._setItems();
  }

  private _setItems(): void{
    this.items = [
      {name: 'Angular.js', url: 'https://angularjs.org/'},
      {name: 'Angular', url: 'https://angular.io/'},
      {name: 'Vue.js', url: 'https://vuejs.org/'},
      {name: 'React.js', url: 'https://facebook.github.io/react/'},
      {name: 'Cycle.js', url: 'https://cycle.js.org/'},
    ]
  }
  
  moreInfo(sitem: ItemSliding, item: any): void {
    let modalpage = this.modalCtrl.create(ModalPage, { siteinfo: item });
    modalpage.present();

    modalpage.onWillDismiss(() => {
      sitem.close();
    })

    modalpage.onDidDismiss(data => {
      console.log(data);
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }
}
