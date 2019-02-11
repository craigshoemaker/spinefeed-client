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
  subscription: Subscription;

  constructor(private spinefeed: SpinefeedService) {
    this.subscription = this.spinefeed.getResults().subscribe(results => {
      this.feedback = results;
    });
  }

  closeDetails(e) {
    e.srcElement.closest('details').removeAttribute('open');
  }

  mouseenter(e) {
    e.srcElement.querySelector('.tools').removeAttribute('hidden');
  }

  mouseleave(e) {
    e.srcElement.querySelector('.tools').setAttribute('hidden', 'hidden');
  }

  open(name) {
    const filePathAndName = path.join(this.feedback.root, name);
    ipcRenderer.send('open-file', filePathAndName);
  }

  ngOnInit() {  }

}
