import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from "../../models/question";
import { Storage } from "@ionic/storage";
import { MainPage } from '../main/main';

/**
 * Generated class for the EcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ec',
  templateUrl: 'ec.html',
})
export class EcPage {
  
  questionList : Array<Question> = new Array();
  color= ['light','light','light'];
  
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillEnter(){
    this.storage.get('ec').then((val)=>{
      for(let i = 0; i<this.color.length; i++){
        this.color[i]=val[i].color;
      }
    }).catch((error: any) => {
    })
  }

  public toggleNamedColor(ionicButton, qNo): void {
    let color : string;
    if(ionicButton._color === 'light') {
      color = ionicButton.color = 'high',
      ionicButton.value = 30
    } else if(ionicButton._color === 'high' ) {
      color = ionicButton.color = 'none',
      ionicButton.value = 0
    } else {
      color = ionicButton.color = 'high',
      ionicButton.value = 30
    }
    
    this.questionList[(qNo - 1)] = new Question('ec', qNo, ionicButton.value, color); // simpan question data yg user jawab
  }

  btnAdd() {
    let sum = 0;
    try{
      for (let index = 0; index < this.questionList.length; index++) {
        sum = sum + this.questionList[index].getScore();
      }
      this.storage.set('ec', this.questionList);
      this.storage.set('ecSum', sum);
    }catch(error){
      this.storage.set('ec', null);
      this.storage.set('ecSum', null);
    }
    this.navCtrl.setRoot(MainPage);
  }
}
