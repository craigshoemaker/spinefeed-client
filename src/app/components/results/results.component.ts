import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';
import * as path from 'path';

const ipcRenderer = require('electron').ipcRenderer;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  feedback: any;
  root: string;
  subscription: Subscription;

  constructor(private spinefeed: SpinefeedService) {
    this.subscription = this.spinefeed.on('data').subscribe(results => {
      this.feedback = results;
      this.root = results.root;
    });
  }

  ngOnInit() {  }

}
