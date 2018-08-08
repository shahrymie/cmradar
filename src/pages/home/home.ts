import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CcPage } from '../cc/cc';
import { RcPage } from '../rc/rc';
import { AccPage } from '../acc/acc';
import { StatPage } from '../stat/stat';
import { EcPage } from '../ec/ec';
import { GhgPage } from '../ghg/ghg';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    
  }

  info(){
    const alert = this.alertCtrl.create({
      subTitle: 'Select the icon to start evaluate your score',
      buttons: ['OK']
    });
    alert.present();
  }
  

  getCc(){
    this.navCtrl.push(CcPage);
  }

  getGhg(){
    this.navCtrl.push(GhgPage);
  }

  getEc(){
    this.navCtrl.push(EcPage);
  }

  getRc(){
    this.navCtrl.push(RcPage);
  }

  getAcc(){
    this.navCtrl.push(AccPage);
  }

  getStat(){
    this.navCtrl.push(StatPage);
  }
}
