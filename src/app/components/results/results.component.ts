import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  feedback: any;
  subscription: Subscription;

  constructor(private spinefeed: SpinefeedService) {
    this.subscription = this.spinefeed.getResults().subscribe(results => {
      this.feedback = results;
    });
  }

  closeDetails(e) {
    e.srcElement.closest('details').removeAttribute('open');
  }

  ngOnInit() {  }

}
