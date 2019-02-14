import { Component, OnInit } from '@angular/core';
import { SpinefeedService } from '../../providers/spinefeed.service';

const { dialog } = require('electron').remote;

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  isVisible = false;
  isExporting = false;

  constructor(private spinefeed: SpinefeedService) {

    this.spinefeed.on('begin').subscribe(() => {
      this.isVisible = false;
    });

    this.spinefeed.on('complete').subscribe(() => {
      this.isVisible = true;
    });
  }

  export() {
    this.isExporting = true;

    const options = {
      title: 'Export Spinefeed Data',
      buttonLabel: 'Export',
      filters: [{
        name: 'Comma Separated Values (CSV)',
        extensions: ['csv']
      }],
      message: 'Select a folder and file name for your export file.'
    };

    dialog.showSaveDialog(options, fileName => {
      if (fileName) {
        this.spinefeed.export(fileName).then(() => {
          this.isExporting = false;
        });
      } else {
        this.isExporting = false;
      }
    });
  }

  ngOnInit() {  }

}
