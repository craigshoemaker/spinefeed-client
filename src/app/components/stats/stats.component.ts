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
  subscription: Subscription;

  isHidden = true;

  constructor(private spinefeed: SpinefeedService) {
    this.subscription = this.spinefeed.getResults().subscribe(results => {
      this.results = results;
      this.isHidden = false;
    });
  }

  ngOnInit() { }

}
