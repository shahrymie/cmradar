import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { CcPage } from '../pages/cc/cc';
import { GhgPage } from '../pages/ghg/ghg';
import { EcPage } from '../pages/ec/ec';
import { RcPage } from '../pages/rc/rc';
import { AccPage } from '../pages/acc/acc';
import { StatPage } from '../pages/stat/stat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    CcPage,
    GhgPage,
    EcPage,
    RcPage,
    AccPage,
    StatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    CcPage,
    GhgPage,
    EcPage,
    RcPage,
    AccPage,
    StatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
