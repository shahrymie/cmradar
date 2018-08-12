import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController, private splashScreen: SplashScreen) {
    this.tabBarElement = document.querySelector('.tabbar');
    
  }

  

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
  
}
