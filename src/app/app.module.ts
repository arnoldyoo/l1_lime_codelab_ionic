import { ModalPage } from './../pages/modal/modal';
import { Tab2Page } from './../pages/tab2/tab2';
import { Tab1Page } from './../pages/tab1/tab1';
import { TabsPage } from './../pages/tabs/tabs';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NavComponent } from './../pages/components/nav/nav.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    ModalPage,
    NavComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }    
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    ModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
