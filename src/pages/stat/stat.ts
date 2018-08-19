import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the StatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google;

@IonicPage()
@Component({
  selector: 'page-stat',
  templateUrl: 'stat.html',
})
export class StatPage {

  @ViewChild('chartCanvas') chartCanvas;
  
  doughnutChart: any;
  labels: string[] = new Array();
  data: number[] = new Array();
  bgColor: string[] = new Array();
  borderColor: string[] = new Array();
  totalLevel = 0;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.initialize();
    this.drawChart();
  }

  public Color(ionicButton): void {
    if(this.totalLevel < 50) {
      ionicButton.color = 'low'
    } else if(this.totalLevel < 80) {
      ionicButton.color = 'medium'
    } else {
      ionicButton.color = 'high'
    }
  }
  
  initialize() {
    this.labels = [
      'Climate Change Risks and Opportunities (CC)',
      'Carbon Emission Accounting (GHG)',
      'Energy Consumption Accounting (EC)',
      'Carbon Reduction and Costs (RC)',
      'Carbon Emission Accountability (ACC)'
    ];
    this.bgColor = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ];
    this.borderColor = [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ];
  }

  drawChart() {
    this.storage.get('pie').then((val) => {
      this.totalLevel = Math.round((val[0]+val[1]+val[2]+val[3]+val[4])/500*100);
      var options = {
        title: 'Statistics',
        pieHole: 0.0,
        chartArea: { left: 0, top: 50, width: "100%", height: "100%" }
      };
      var data = google.visualization.arrayToDataTable([
        ['Categories', 'Percentage (%)'],
        [ this.labels[0], val[0] ],
        [ this.labels[1], val[1] ],
        [ this.labels[2], val[2] ],
        [ this.labels[3], val[3] ],
        [ this.labels[4], val[4] ]
      ]);
      var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
  
      chart.draw(data, options);
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}


