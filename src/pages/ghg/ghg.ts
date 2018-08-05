import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GhgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ghg',
  templateUrl: 'ghg.html',
})
export class GhgPage {

  public value: number = 30;
  public ionicNamedColor = 'high';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GhgPage');
  }

  public toggleNamedColor(ionicButton): void {
    if(ionicButton._color === 'light') {
      ionicButton.color = 'high',
      ionicButton.value = 30
    }else if(ionicButton._color === 'high') { 
      ionicButton.color = 'none',
      ionicButton.value = 0
    }else{
      ionicButton.color = 'high',
      ionicButton.value = 30
    }
  }
}
