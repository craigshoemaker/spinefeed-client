import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  results: any;
  isHidden = true;

  constructor(private spinefeed: SpinefeedService) {
    this.spinefeed.on('begin').subscribe(results => {
      this.isHidden = true;
    });

    this.spinefeed.on('data').subscribe(results => {
      this.results = results;
      this.isHidden = false;
    });
  }

  ngOnInit() { }

}
