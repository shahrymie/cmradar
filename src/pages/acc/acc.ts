import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acc',
  templateUrl: 'acc.html',
})
export class AccPage {

  public value: number = 30;
  public ionicNamedColor = 'high';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccPage');
  }

  public toggleNamedColor(): void {
    if(this.value === 30 ) { 
      this.ionicNamedColor = 'medium',
      this.value = 20
    } else if(this.value === 20) { 
      this.ionicNamedColor = 'low',
      this.value = 10
    } else if(this.value === 10) { 
      this.ionicNamedColor = 'none',
      this.value = 0
    } else{
      this.ionicNamedColor = 'high',
      this.value = 30
    }
  }
}
