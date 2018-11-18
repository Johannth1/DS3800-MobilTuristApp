import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DataProvider } from '../providers/data/data';
import {ExpandableComponent} from '../components/expandable/expandable';
//import { ShareComponent } from '../components/share/share';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExpandableComponent,
//    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
//    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  //  ShareComponent,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
