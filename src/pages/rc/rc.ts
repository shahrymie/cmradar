import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from "../../models/question";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the RcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rc',
  templateUrl: 'rc.html',
})
export class RcPage {

  public value: number = 30;
  public ionicNamedColor = 'high';
  
  questionList : Array<Question> = new Array();
  
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  public toggleNamedColor(ionicButton, qNo): void {
    if(ionicButton._color === 'light') {
      ionicButton.color = 'high',
      ionicButton.value = 30
    }else if(ionicButton._color === 'high') { 
      ionicButton.color = 'none',
      ionicButton.value = 0
    }else{
      ionicButton.color = 'high',
      ionicButton.value = 30
    }

    this.questionList[(qNo - 1)] = new Question('rc', qNo, ionicButton.value);
  }

  btnAdd() {
    console.log(this.questionList);
    this.storage.set('rc', this.questionList);
  }
}
