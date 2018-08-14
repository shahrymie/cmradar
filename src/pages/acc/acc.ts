import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from "../../models/question";
import { Storage } from "@ionic/storage";
import { MainPage } from '../main/main';

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
  questionList : Array<Question> = new Array();
  color= ['light','light'];
  
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter(){
    this.storage.get('acc').then((val)=>{
      for(let i = 0; i<this.color.length; i++){
        this.color[i]=val[i].color;
      }
    }).catch((error: any) => {
    })
  }

  public toggleNamedColor(ionicButton, qNo): void {
    let color: string;
    if(ionicButton._color === 'light') {
      ionicButton.color = 'high',
      color = 'high',
      ionicButton.value = 30
    } else if(ionicButton._color === 'high' ) {
      ionicButton.color = 'none',
      color = 'none',
      ionicButton.value = 0
    } else {
      ionicButton.color = 'high',
      color = 'high',
      ionicButton.value = 30
    }
    console.log(color);
    this.questionList[(qNo - 1)] = new Question('acc', qNo, ionicButton.value, color); // simpan question data yg user jawab
    console.log(this.questionList);
  }

  btnAdd() {
    var sum = 0;
    for (var index = 0; index < this.questionList.length; index++) {
      sum = sum + this.questionList[index].getScore();   
    }
    this.storage.set('acc', this.questionList);
    this.storage.set('accSum', sum); // simpan question data yg user jawab dlm internal db
    this.navCtrl.push(MainPage);
  }
}
