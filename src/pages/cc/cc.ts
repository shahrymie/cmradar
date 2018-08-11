import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from "../../models/question";
import { Storage } from "@ionic/storage"; // utk pakai storage function

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

    this.questionList[(qNo - 1)] = new Question('cc', qNo, ionicButton.value); // simpan question data yg user jawab
  }

  btnAdd() {
    console.log(this.questionList);
    this.storage.set('cc', this.questionList); // simpan question data yg user jawab dlm internal db
  }
}
