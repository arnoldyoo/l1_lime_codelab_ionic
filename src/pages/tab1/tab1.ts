import { ModalPage } from './../modal/modal';
import { ModalController } from 'ionic-angular/components/modal/modal';
import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page implements OnInit{

  items: Array<any>;
  firebaseItems: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private angularFire: AngularFire
  ) {

  }
  
  ngOnInit(): void {
    this._setItems();

    this.angularFire.auth.subscribe(auth => {
      this.firebaseItems = this.angularFire.database.list('/items');

      this.firebaseItems.subscribe(items => {
        if(items.length === 0) {
          this.firebaseItems.push({name: 'Angular.js', url: 'https://angularjs.org/'});
          this.firebaseItems.push({name: 'Angular', url: 'https://angular.io/'});
          this.firebaseItems.push({name: 'Vue.js', url: 'https://vuejs.org/'});
          this.firebaseItems.push({name: 'React.js', url: 'https://facebook.github.io/react/'});
          this.firebaseItems.push({name: 'Cycle.js', url: 'https://cycle.js.org/'});
        }
      });
    });
  }

  deleteInfo(sitem: ItemSliding, item: any): void {
    this.firebaseItems.remove(item.$key);
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

    this.firebaseItems.update(item.$key, {
      viewCount: (item.viewCount) ? item.viewCount+1 : 1
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }
}
