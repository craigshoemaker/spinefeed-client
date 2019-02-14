import { Component, OnInit } from '@angular/core';
import { SpinefeedService } from '../../providers/spinefeed.service';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  feedback: any;

  constructor(private spinefeed: SpinefeedService,
              private appData: DataService) {

    this.spinefeed.on('begin').subscribe(() => {
      this.feedback = {};
    });

    this.spinefeed.on('data').subscribe(() => {
      this.feedback = this.appData.get();
    });
  }

  ngOnInit() {  }

}
