import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from "../../models/question";
import { Storage } from "@ionic/storage";

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
  color = 'light';
  questionList : Array<Question> = new Array();

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  public toggleNamedColor(ionicButton, qNo): void {
    if(ionicButton._color === 'light') {
      ionicButton.color = 'high',
      ionicButton.value = 30
    } else if(ionicButton._color === 'high') {
      ionicButton.color = 'none',
      ionicButton.value = 0
    } else {
      ionicButton.color = 'high',
      ionicButton.value = 30
    }

    this.questionList[(qNo - 1)] = new Question('cc', qNo, ionicButton.value);
  }

  btnAdd() {
    console.log(this.questionList);

    for(var i=0 ; i<this.questionList.length ; i++)
      this.storage.set('cc' + (i + 1), this.questionList[i]);

    this.storage.get('cc1').then((val) => {
      console.log(val.score);
    });
  }
}
