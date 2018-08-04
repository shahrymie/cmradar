import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cc',
  templateUrl: 'cc.html',
})
export class CcPage {

  public value: number = 30;
  public ionicNamedColor = 'high';
  public selectedId = 0;
  public btnColor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleNamedColor(ionicButton) {
    if(ionicButton.value === 30 ) { 
      ionicButton.ionicNamedColor = 'medium';
      ionicButton.value = 20;
      this.btnColor = '#ff0000';
    } else if(ionicButton.value === 20) { 
      ionicButton.ionicNamedColor = 'low';
      ionicButton.value = 10;
      this.btnColor = '#00ff00';
    } else if(ionicButton.value === 10) { 
      ionicButton.ionicNamedColor = 'none';
      ionicButton.value = 0;
      this.btnColor = '#0000ff';
    } else {
      ionicButton.ionicNamedColor = 'high';
      ionicButton.value = 30;
      this.btnColor = '#000000';
    }
  }

}
