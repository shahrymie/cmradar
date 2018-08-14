import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public storage: Storage, public navCtrl: NavController) {
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ionViewWillEnter(){}

  drawChart(){
    var data = google.visualization.arrayToDataTable([
          ['Categories', 'Percentage'],
          ['CC', 1],
          ['GHG', 2],
          ['EC', 3],
          ['RC', 1],
          ['ACC', 4]
        ]);

        // Set chart options
        var options = {'title':'Analysis Chart',
                        is3D: true,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
  }

}
