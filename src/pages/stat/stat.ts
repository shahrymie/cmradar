import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Chart } from "chart.js";

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

  @ViewChild('chartCanvas') chartCanvas;
  
  doughnutChart: any;
  labels: string[] = new Array();
  data: number[] = new Array();
  bgColor: string[] = new Array();
  borderColor: string[] = new Array();

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.initialize();
    this.drawChart();
    
    $(window).resize();
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

    this.storage.get('pie').then((val) => {
      for(let i=0 ; i<val.length ; i++)
        this.data[i] = Math.round(100/500*val[i]);
    });

    console.log(this.data);
  }

  drawChart() {
    this.doughnutChart = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [{
          label: "percentage (%)",
          data: this.data,
          backgroundColor: this.bgColor,
          borderColor: this.borderColor,
          borderWidth: 1
        }]
      },
      options: {
        animateRotate: true,
        animateScale: true
      }
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


