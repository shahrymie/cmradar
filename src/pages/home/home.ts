import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CcPage } from '../cc/cc';
import { RcPage } from '../rc/rc';
import { AccPage } from '../acc/acc';
import { StatPage } from '../stat/stat';
import { EcPage } from '../ec/ec';
import { GhgPage } from '../ghg/ghg';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  score: number[];

  constructor(private storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    /*this.score[0]=this.load('ccSum',0);
    this.score[1]=this.load('ghgSum',1);
    this.score[2]=this.load('ecSum',2);
    this.score[3]=this.load('rcSum',3);
    this.score[4]=this.load('accSum',4);*/
    
  }

  load(id: string): number{
    let s: number;
    if(s!==null){
      this.storage.get(id).then((val)=>{
        return val;
      });
    }else{
      return 0;
    }
  }

  info(){
    const alert = this.alertCtrl.create({
      title: 'Getting Started',
      message: '<p>Select the icon to start evaluating your score</p><p>Indicator:</p><p><div class="foo green"></div> Practiced</p><p><div class="foo grey"></div> Not Practiced</p>',
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
