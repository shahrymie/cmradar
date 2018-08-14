import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ChartsModule } from 'ng2-charts';

/**
 * Generated class for the StatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stat',
  templateUrl: 'stat.html',
})
export class StatPage {

  sum= [];
  public doughnutChartLabels:string[] = ['Climate Change Risks and Opportunities (CC)',
                                         'Carbon Emission Accounting (GHG)',
                                         'Energy Consumption Accounting (EC)',
                                         'Carbon Reduction and Costs (RC)',
                                         'Carbon Emission Accountability (ACC)'];
  public doughnutChartData:number[] = [this.sum[0], this.sum[1], this.sum[2], this.sum[3], this.sum[4]]/*[5,4,3,2,1]*/;
  public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.storage.get('pie').then((val)=>{
      for(let i=0;i<val.length;i++){
        this.sum[i]=Math.round(100/500*val[i]);
        console.log(this.sum[i]);
      }
    });
  }
}


