import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CcPage');
  }

  public toggleNamedColor(ionicButton): void{
    if(ionicButton.value === 30 ) { 
      ionicButton.ionicNamedColor = 'medium',
      ionicButton.value = 20
    } else if(ionicButton.value === 20) { 
      ionicButton.ionicNamedColor = 'low',
      ionicButton.value = 10
    } else if(ionicButton.value === 10) { 
      ionicButton.ionicNamedColor = 'none',
      ionicButton.value = 0
    } else{
      ionicButton.ionicNamedColor = 'high',
      ionicButton.value = 30
    }
    
  }

  
}
