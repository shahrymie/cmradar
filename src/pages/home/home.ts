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
  
  sum = [];
  color = [];

  constructor(private storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    this.storage.get('ccSum').then((val)=>{
      this.sum[0]=Math.round(val/60*100);
    });
    this.storage.get('ghgSum').then((val)=>{
      this.sum[1]=Math.round(val/270*100);
    });
    this.storage.get('ecSum').then((val)=>{
      this.sum[2]=Math.round(val/90*100);
    });
    this.storage.get('rcSum').then((val)=>{
      this.sum[3]=Math.round(val/120*100);
    });
    this.storage.get('accSum').then((val)=>{
      this.sum[4]=Math.round(val/60*100);
    });
  }

  ionViewWillEnter(){
    for(let i = 0; i < this.sum.length ; i++){
      if(this.sum[i] < 50){
        this.color[i] = 'low';
      }else if(this.sum[i] < 80){
        this.color[i] = 'medium';
      }else{
        this.color[i] = 'high';
      }
      console.log(this.sum[i]);
      console.log(this.color[i]);
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
      this.navCtrl.push(HomePage);
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
