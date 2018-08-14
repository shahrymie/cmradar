import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { CcPage } from '../cc/cc';
import { RcPage } from '../rc/rc';
import { AccPage } from '../acc/acc';
import { StatPage } from '../stat/stat';
import { EcPage } from '../ec/ec';
import { GhgPage } from '../ghg/ghg';



/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  sum = [];
  pie = [];
  color = [];

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.storage.get('ccSum').then((val)=>{
      this.sum[0]=Math.round(val/60*100);
      this.pie[0]=Math.round(100/500*this.sum[0]);
    });
    this.storage.get('ghgSum').then((val)=>{
      this.sum[1]=Math.round(val/270*100);
      this.pie[1]=Math.round(100/500*this.sum[1]);
    });
    this.storage.get('ecSum').then((val)=>{
      this.sum[2]=Math.round(val/90*100);
      this.pie[2]=Math.round(100/500*this.sum[2]);
    });
    this.storage.get('rcSum').then((val)=>{
      this.sum[3]=Math.round(val/120*100);
      this.pie[3]=Math.round(100/500*this.sum[3]);
    });
    this.storage.get('accSum').then((val)=>{
      this.sum[4]=Math.round(val/60*100);
      this.pie[4]=Math.round(100/500*this.sum[4]);
    });
  }

  ionViewDidEnter(){
    for(let i = 0; i < 5 ; i++){
      if(this.sum[i] < 50){
        this.color[i] = 'low';
      }else if(this.sum[i] < 80){
        this.color[i] = 'medium';
      }else{
        this.color[i] = 'high';
      }
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
    
    reset(){
        this.storage.clear();
        this.navCtrl.push(MainPage);
    }
  
    confirm(){
      let totalLevel = this.sum[0]+this.sum[1]+this.sum[2]+this.sum[3]+this.sum[4];
      let pieVal = [];
      for(let i = 0; i< this.sum.length;i++){
        pieVal[i]=Math.round(500/totalLevel*this.sum[i]);
        console.log(pieVal[i]);
      }
      this.storage.set("pie",pieVal);
      this.navCtrl.push(StatPage);
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
      this.navCtrl.push(StatPage, );
    }
}
