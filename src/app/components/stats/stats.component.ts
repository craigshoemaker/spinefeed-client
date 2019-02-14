import { Component, OnInit } from '@angular/core';
import { SpinefeedService } from '../../providers/spinefeed.service';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  results: any;
  isHidden = true;

  constructor(private spinefeed: SpinefeedService,
              private appData: DataService) {

    this.spinefeed.on('begin').subscribe(() => {
      this.isHidden = true;
    });

    this.spinefeed.on('data').subscribe(() => {
      this.isHidden = false;
      this.results = this.appData.get();
    });
  }

  ngOnInit() { }

}
