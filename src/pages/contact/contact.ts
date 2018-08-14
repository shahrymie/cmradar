import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  sum: number[]=[0,0,0,0,0];

  constructor(public storage: Storage, public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    this.storage.get('pie').then((val)=>{
      for(let i=0;i<val.length;i++){
        this.sum[i]=Math.round(100/500*val[i]);
        console.log(this.sum[i]);
      }
    });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart(){
    var data = google.visualization.arrayToDataTable([
          ['Categories', 'Percentage'],
          ['CC', this.sum[0]],
          ['GHG', this.sum[1]],
          ['EC', this.sum[2]],
          ['RC', this.sum[3]],
          ['ACC', this.sum[4]]
        ]);

        // Set chart options
        var options = {'title':'Analysis Chart',
                        is3D: true,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
  }

}
