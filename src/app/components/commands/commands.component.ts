import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinefeedService } from '../../providers/spinefeed.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  isVisible = false;

  constructor(private spinefeed: SpinefeedService) {

    this.spinefeed.on('begin').subscribe(() => {
      this.isVisible = false;
    });

    this.spinefeed.on('complete').subscribe(() => {
      this.isVisible = true;
    });
  }

  export() {
    alert('export');
  }

  ngOnInit() {  }

}
