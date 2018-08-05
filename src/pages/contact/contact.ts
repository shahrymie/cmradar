import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart(){
    var data = google.visualization.arrayToDataTable([
          ['Categories', 'Percentage'],
          ['CC', 3],
          ['GHG', 1],
          ['EC', 1],
          ['RC', 1],
          ['ACC', 2]
        ]);

        // Set chart options
        var options = {'title':'Analysis Chart',
                        is3D: true,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
  }

}
