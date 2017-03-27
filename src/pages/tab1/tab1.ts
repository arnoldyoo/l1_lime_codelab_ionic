import { AddModalPage } from './../add-modal/add-modal';
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
  title: string = 'TAB1';

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
          this.firebaseItems.push({name: 'Angular.js', url: 'https://angularjs.org/', viewCount: 0});
          this.firebaseItems.push({name: 'Angular', url: 'https://angular.io/', viewCount: 0});
          this.firebaseItems.push({name: 'Vue.js', url: 'https://vuejs.org/', viewCount: 0});
          this.firebaseItems.push({name: 'React.js', url: 'https://facebook.github.io/react/', viewCount: 0});
          this.firebaseItems.push({name: 'Cycle.js', url: 'https://cycle.js.org/', viewCount: 0});
        } else {
          items.map(item => {
            console.log(item);
          })
        }
      });
    });
  }

  deleteInfo(sitem: ItemSliding, item: any): void {
    this.firebaseItems.remove(item.$key);
  }

  private _setItems(): void{
    this.items = [
      {name: 'Angular.js', url: 'https://angularjs.org/', viewCount: '1'},
      {name: 'Angular', url: 'https://angular.io/', viewCount: 0},
      {name: 'Vue.js', url: 'https://vuejs.org/', viewCount: 0},
      {name: 'React.js', url: 'https://facebook.github.io/react/', viewCount: 0},
      {name: 'Cycle.js', url: 'https://cycle.js.org/', viewCount: 0},
    ]
  }
  
  moreInfo(sitem: ItemSliding, item: any): void {
    let modalpage = this.modalCtrl.create(ModalPage, { siteinfo: item });
    modalpage.present();

    modalpage.onWillDismiss(() => {
      sitem.close();
    })

    modalpage.onDidDismiss(data => {
      data.$key = item.$key;
      this._saveItem(data);
    })

    this.firebaseItems.update(item.$key, {
      viewCount: (item.viewCount !== 0) ? item.viewCount+1 : 1
    })
  }

  addSite(): void {
    console.log('add!');
    let addpage = this.modalCtrl.create(AddModalPage);
    addpage.present();

    addpage.onDidDismiss(data => {
      this._saveItem(data);
    })
  }

  private _saveItem(item: any): void {
    console.log(item);

    if (item.state === 'add') {
      // insert new
    } else {
      // update item
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }
}
