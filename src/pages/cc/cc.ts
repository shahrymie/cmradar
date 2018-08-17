import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from "../../models/question";
import { Storage } from "@ionic/storage"; // utk pakai storage function
import { MainPage } from '../main/main';

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
  questionList : Array<Question> = new Array(); // simpan data question yg user jawab
  color= ['light','light'];

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillEnter(){
    this.storage.get('cc').then((val)=>{
      for(let i = 0; i<this.color.length; i++){
        this.color[i]=val[i].color;
      }
      
      for(let i=0 ; i<val.length ; i++) {
        this.questionList[i] = val[i];
      }
    }).catch((error: any) => {})
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
    
    this.questionList[(qNo - 1)] = new Question('cc', qNo, ionicButton.value, color); // simpan question data yg user jawab
  }

  btnAdd() {
    let sum = 0;
    try{
      for (let index = 0; index < this.questionList.length; index++){ 
        console.log(this.questionList[index]);
        sum = sum + this.questionList[index].getScore();
      }
      this.storage.set('cc', this.questionList);
      this.storage.set('ccSum', sum);
    }catch(error){
      console.log(this.questionList);
      this.storage.set('cc', null);
      this.storage.set('ccSum', null);
    }
    this.navCtrl.push(MainPage);
  }
}
