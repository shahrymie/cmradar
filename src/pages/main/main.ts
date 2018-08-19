import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
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

  sum = [null, null, null, null, null];
  pie = [];
  count = 0;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
      this.getPercent('ccSum',0,60);
      this.getPercent('ghgSum',1,210);
      this.getPercent('ecSum',2,90);
      this.getPercent('rcSum',3,120);
      this.getPercent('accSum',4,60);
  }  

  getPercent(id,index,total){
      this.storage.get(id).then((val)=>{
        if(val===null){
          this.sum[index]=null;
        }else{
        this.sum[index]=Math.round(val/total*100);
        this.pie[index]=Math.round(100/500*this.sum[4])
        this.count = this.count+1;
        }
      });
  }

  public Color(ionicButton, i): void {
    ionicButton.value = this.sum[i];
    if(ionicButton.value === null){
      ionicButton.color = 'primary'
    }else if(ionicButton.value < 50) {
      ionicButton.color = 'low'
    } else if(ionicButton.value < 80) {
      ionicButton.color = 'medium'
    } else {
      ionicButton.color = 'high'
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
        this.navCtrl.setRoot(MainPage);
    }
  
    confirm(){
      this.storage.set("pie",this.sum);
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
